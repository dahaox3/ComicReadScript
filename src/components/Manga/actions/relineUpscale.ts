import { toast } from 'components/Toast';
import { log, singleThreaded, t } from 'helper';
import { request } from 'request';

import { downloadImg } from '../helper';
import { setState, store } from '../store';
import { activePage } from './memo';

type RelineCacheItem = {
  blob: Blob;
  blobUrl: string;
  size: number;
  lastUsed: number;
};

const maxCacheCount = 50;
const maxCacheSize = 512 * 1024 * 1024;
const cache = new Map<string, RelineCacheItem>();
let cacheSize = 0;

const rt = (key: string, fallback: string, variables?: Record<string, unknown>) =>
  t(`reline_upscale.${key}`, variables) || fallback;

const normalizeServerUrl = () =>
  (store.option.relineUpscale.serverUrl || 'http://127.0.0.1:5678').replace(
    /\/$/,
    '',
  );

const setMessage = (url: string, message: string) =>
  setState('imgMap', url, 'relineUpscaleMessage', message);

const getCacheKey = (url: string) => `${location.href.split('#')[0]}:${url}`;

const touchCache = (key: string, item: RelineCacheItem) => {
  item.lastUsed = Date.now();
  cache.delete(key);
  cache.set(key, item);
};

const getCache = (url: string) => {
  const key = getCacheKey(url);
  const item = cache.get(key);
  if (!item) return;
  touchCache(key, item);
  return item;
};

const evictCache = () => {
  while (cache.size > maxCacheCount || cacheSize > maxCacheSize) {
    const entry = cache.entries().next().value;
    if (!entry) return;
    const [key, item] = entry;
    cache.delete(key);
    cacheSize -= item.size;
    URL.revokeObjectURL(item.blobUrl);
  }
};

const saveCache = (key: string, blob: Blob) => {
  const oldItem = cache.get(key);
  if (oldItem) {
    cacheSize -= oldItem.size;
    URL.revokeObjectURL(oldItem.blobUrl);
  }

  const item = {
    blob,
    blobUrl: URL.createObjectURL(blob),
    size: blob.size,
    lastUsed: Date.now(),
  };
  cache.set(key, item);
  cacheSize += item.size;
  evictCache();
  return item;
};

const applyCache = (url: string) => {
  const item = getCache(url);
  if (!item) return false;
  setState('imgMap', url, {
    relineUpscaleUrl: item.blobUrl,
    relineUpscaleType: 'cached',
    relineUpscaleMessage: rt('cached', 'Reline result is cached'),
  });
  return true;
};

const checkServer = async () => {
  const res = await request<{ queue_length?: number }>(
    `${normalizeServerUrl()}/status`,
    {
      responseType: 'json',
      timeout: 1000 * 5,
      fetch: false,
      noTip: true,
      errorText: rt(
        'server_not_started',
        'Reline service is not started. Start API service in Reline first.',
      ),
    },
  );
  return res.response;
};

const upload = async (blob: Blob) => {
  const formData = new FormData();
  const ext = blob.type.split('/').at(-1) || 'png';
  formData.append('file', new File([blob], `image.${ext}`, { type: blob.type }));

  const res = await request<Blob>(`${normalizeServerUrl()}/upscale`, {
    method: 'POST',
    responseType: 'blob',
    timeout: 1000 * 120,
    fetch: false,
    data: formData,
    noTip: true,
    errorText: rt('upload_failed', 'Failed to upload image to Reline'),
  });

  const contentType =
    res.responseHeaders?.match(/content-type:\s*([^\r\n;]+)/i)?.[1] ||
    res.response.type;
  if (!contentType) return res.response;
  return new Blob([res.response], { type: contentType });
};

export const relineUpscaleImage = async (url: string) => {
  try {
    if (!url) return;
    const img = store.imgMap[url];
    if (!img || img.loadType !== 'loaded') {
      setMessage(url, t('translation.tip.img_not_fully_loaded'));
      return;
    }

    if (applyCache(url)) return;

    setState('imgMap', url, {
      relineUpscaleType: 'wait',
      relineUpscaleMessage: rt('connecting', 'Connecting to Reline service'),
    });
    const status = await checkServer();
    if (status.queue_length)
      setMessage(
        url,
        rt('queued', `Reline queue: ${status.queue_length} image(s)`, {
          pos: status.queue_length,
        }),
      );

    setState('imgMap', url, {
      relineUpscaleType: 'processing',
      relineUpscaleMessage: rt('processing', 'Reline processing image'),
    });
    const blob = await downloadImg(url);
    const resultBlob = await upload(blob);
    const item = saveCache(getCacheKey(url), resultBlob);
    const currentType = store.imgMap[url]?.relineUpscaleType;
    const shouldShow = currentType === 'wait' || currentType === 'processing';

    setState('imgMap', url, {
      relineUpscaleUrl: item.blobUrl,
      relineUpscaleType: shouldShow ? 'show' : 'hide',
      relineUpscaleMessage: rt('completed', 'Reline upscale completed'),
    });
  } catch (error) {
    log.error('Reline upscale error', error);
    setState('imgMap', url, {
      relineUpscaleType: 'error',
      relineUpscaleMessage:
        (error as Error)?.message || rt('failed', 'Reline upscale failed'),
    });
    toast.error(rt('failed', 'Reline upscale failed'));
  }
};

const relineUpscaleNext = singleThreaded(async (state) => {
  const targetUrl = store.imgList.find((url) => {
    const img = store.imgMap[url];
    return img?.relineUpscaleType === 'wait';
  });
  if (!targetUrl) return;
  await relineUpscaleImage(targetUrl);
  state.continueRun();
});

export const setImgRelineUpscaleEnable = (
  list: Iterable<number>,
  enable: boolean,
) => {
  if (!store.option.relineUpscale.enabled && enable) return;

  setState((state) => {
    for (const i of list) {
      const img = state.imgMap[state.imgList[i]];
      if (!img) continue;
      if (enable) {
        if (img.relineUpscaleUrl) {
          img.relineUpscaleType = 'show';
          img.relineUpscaleMessage = rt('completed', 'Reline upscale completed');
        } else {
          const item = getCache(img.src);
          if (item) {
            img.relineUpscaleUrl = item.blobUrl;
            img.relineUpscaleType = 'cached';
            img.relineUpscaleMessage = rt('cached', 'Reline result is cached');
            continue;
          }
          img.relineUpscaleType = 'wait';
          img.relineUpscaleMessage = rt('wait', 'Waiting for Reline upscale');
        }
      } else if (
        img.relineUpscaleType === 'show' ||
        img.relineUpscaleType === 'cached'
      ) {
        img.relineUpscaleType = 'hide';
      } else if (
        img.relineUpscaleType === 'wait' ||
        img.relineUpscaleType === 'processing' ||
        img.relineUpscaleType === 'error'
      ) {
        img.relineUpscaleType = undefined;
      }
    }
  });

  if (enable) void relineUpscaleNext();
};

export const isRelineUpscalingImage = () =>
  activePage().some((i) => {
    const type = store.imgMap[store.imgList[i]]?.relineUpscaleType;
    return (
      type === 'wait' ||
      type === 'processing' ||
      type === 'show' ||
      type === 'cached'
    );
  });

export const toggleRelineUpscaleCurrent = () =>
  setImgRelineUpscaleEnable(activePage(), !isRelineUpscalingImage());

export const retryCurrentRelineUpscale = () => {
  setState((state) => {
    for (const i of activePage()) {
      const img = state.imgMap[state.imgList[i]];
      if (!img) continue;
      img.relineUpscaleType = 'wait';
      img.relineUpscaleMessage = rt('wait', 'Waiting for Reline upscale');
      img.relineUpscaleUrl = undefined;
    }
  });
  void relineUpscaleNext();
};
