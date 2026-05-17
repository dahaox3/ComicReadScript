import { toast } from 'components/Toast';
import { log, singleThreaded, t } from 'helper';
import { request } from 'request';

import { downloadImg } from '../helper';
import { setState, store } from '../store';
import { activeImgIndex, activePage } from './memo';

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
let runId = 0;
let relineRunEnabled = false;

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

const applyCache = (
  url: string,
  type: 'cached' | 'show' | 'hide' = 'cached',
) => {
  const item = getCache(url);
  if (!item) return false;
  setState('imgMap', url, {
    relineUpscaleUrl: item.blobUrl,
    relineUpscaleType: type,
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

const isPendingType = (type: unknown) =>
  type === 'wait' || type === 'processing' || type === 'error';

const isFinishedType = (type: unknown) =>
  type === 'show' || type === 'cached' || type === 'hide';

const shouldProcessImg = (index: number) => {
  const url = store.imgList[index];
  const img = store.imgMap[url];
  if (!img || img.loadType !== 'loaded') return false;
  if (img.relineUpscaleUrl || getCache(url)) return false;
  return !isFinishedType(img.relineUpscaleType);
};

const promoteOrMark = (index: number) => {
  const url = store.imgList[index];
  const img = store.imgMap[url];
  if (!img || img.loadType !== 'loaded') return;
  if (img.relineUpscaleUrl) {
    if (img.relineUpscaleType === 'hide' || img.relineUpscaleType === undefined)
      setState('imgMap', url, {
        relineUpscaleType: 'show',
        relineUpscaleMessage: rt('completed', 'Reline upscale completed'),
      });
    return;
  }
  const item = getCache(url);
  if (item) {
    setState('imgMap', url, {
      relineUpscaleUrl: item.blobUrl,
      relineUpscaleType: 'show',
      relineUpscaleMessage: rt('cached', 'Reline result is cached'),
    });
    return;
  }
  if (isFinishedType(img.relineUpscaleType) || img.relineUpscaleType === 'processing')
    return;
  setState('imgMap', url, {
    relineUpscaleType: 'wait',
    relineUpscaleMessage: rt('wait', 'Waiting for Reline upscale'),
  });
};

const getScanBounds = () => {
  const range = store.option.relineUpscale.preloadRange;
  if (range === -1) return [0, store.imgList.length - 1] as const;
  const active = activeImgIndex();
  return [
    Math.max(0, active - range),
    Math.min(store.imgList.length - 1, active + range),
  ] as const;
};

const enqueueConfiguredRange = () => {
  const [start, end] = getScanBounds();
  const active = activeImgIndex();
  for (let i = active; i <= end; i++) promoteOrMark(i);
  if (!store.option.relineUpscale.preloadPrevious) return;
  for (let i = Math.min(active - 1, end); i >= start; i--) promoteOrMark(i);
};

const findNextUnprocessed = () => {
  const [start, end] = getScanBounds();
  const active = activeImgIndex();
  for (let i = active; i <= end; i++) if (shouldProcessImg(i)) return store.imgList[i];
  if (!store.option.relineUpscale.preloadPrevious) return;
  for (let i = Math.min(active - 1, end); i >= start; i--)
    if (shouldProcessImg(i)) return store.imgList[i];
};

const stopRelineRun = () => {
  runId += 1;
  relineRunEnabled = false;
  setState((state) => {
    for (const url of state.imgList) {
      const img = state.imgMap[url];
      if (!img) continue;
      if (img.relineUpscaleType === 'show' || img.relineUpscaleType === 'cached')
        img.relineUpscaleType = 'hide';
      else if (isPendingType(img.relineUpscaleType))
        img.relineUpscaleType = undefined;
    }
  });
};

export const relineUpscaleImage = async (url: string, currentRunId = runId) => {
  try {
    if (!url) return;
    const img = store.imgMap[url];
    if (!img || img.loadType !== 'loaded') {
      setMessage(url, t('translation.tip.img_not_fully_loaded'));
      return;
    }

    if (applyCache(url, relineRunEnabled ? 'show' : 'hide')) return;

    if (currentRunId === runId)
      setState('imgMap', url, {
        relineUpscaleType: 'wait',
        relineUpscaleMessage: rt('connecting', 'Connecting to Reline service'),
      });
    const status = await checkServer();
    if (currentRunId === runId && status.queue_length)
      setMessage(
        url,
        rt('queued', `Reline queue: ${status.queue_length} image(s)`, {
          pos: status.queue_length,
        }),
      );

    if (currentRunId === runId)
      setState('imgMap', url, {
        relineUpscaleType: 'processing',
        relineUpscaleMessage: rt('processing', 'Reline processing image'),
      });
    const blob = await downloadImg(url);
    const resultBlob = await upload(blob);
    const item = saveCache(getCacheKey(url), resultBlob);
    const currentType = store.imgMap[url]?.relineUpscaleType;
    const shouldShow =
      relineRunEnabled &&
      (currentType === undefined ||
        currentType === 'wait' ||
        currentType === 'processing');

    setState('imgMap', url, {
      relineUpscaleUrl: item.blobUrl,
      relineUpscaleType: shouldShow ? 'show' : 'hide',
      relineUpscaleMessage: rt('completed', 'Reline upscale completed'),
    });
  } catch (error) {
    log.error('Reline upscale error', error);
    if (currentRunId !== runId) return;
    setState('imgMap', url, {
      relineUpscaleType: 'error',
      relineUpscaleMessage:
        (error as Error)?.message || rt('failed', 'Reline upscale failed'),
    });
    toast.error(rt('failed', 'Reline upscale failed'));
  }
};

const relineUpscaleNext = singleThreaded(async (state) => {
  const currentRunId = runId;
  enqueueConfiguredRange();
  const targetUrl = findNextUnprocessed();
  if (!targetUrl) return;
  await relineUpscaleImage(targetUrl, currentRunId);
  if (currentRunId === runId) state.continueRun();
});

export const setImgRelineUpscaleEnable = (
  list: Iterable<number>,
  enable: boolean,
) => {
  if (!store.option.relineUpscale.enabled && enable) return;
  if (!enable) {
    stopRelineRun();
    return;
  }

  runId += 1;
  relineRunEnabled = true;

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

  void relineUpscaleNext();
};

export const isRelineUpscalingImage = () =>
  store.imgList.some((url) => {
    const type = store.imgMap[url]?.relineUpscaleType;
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
