import { toast } from 'components/Toast';
import { log, singleThreaded, t } from 'helper';
import { request } from 'request';

import { downloadImg } from '../helper';
import { setState, store } from '../store';
import { activeImgIndex, activePage } from './memo';

type RelineCacheItem = {
  blob: Blob;
  blobUrl: string;
  imgUrl: string;
  lastUsed: number;
};

const cache = new Map<string, RelineCacheItem>();
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
  const limit = store.option.relineUpscale.cacheLimit;
  if (limit === 0) return;
  while (cache.size > limit) {
    const entry = cache.entries().next().value;
    if (!entry) return;
    const [key, item] = entry;
    cache.delete(key);
    URL.revokeObjectURL(item.blobUrl);
    setState('imgMap', item.imgUrl, {
      relineUpscaleUrl: undefined,
      relineUpscaleType: undefined,
      relineUpscaleMessage: undefined,
    });
  }
};

const saveCache = (key: string, blob: Blob, imgUrl: string) => {
  const oldItem = cache.get(key);
  if (oldItem) URL.revokeObjectURL(oldItem.blobUrl);

  const item = {
    blob,
    blobUrl: URL.createObjectURL(blob),
    imgUrl,
    lastUsed: Date.now(),
  };
  cache.set(key, item);
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

const parseRelineError = async (res: {
  responseText?: string;
  response?: unknown;
  status?: number;
  statusText?: string;
}) => {
  let text = res.responseText || '';
  if (!text && res.response instanceof Blob) text = await res.response.text();
  if (text) {
    const message = parseRelineErrorText(text);
    if (message) return message;
  }
  return res.statusText || (res.status ? `HTTP ${res.status}` : undefined);
};

const parseRelineErrorText = (text: string) => {
  const trimmed = text.trim();
  if (!trimmed) return;

  try {
    const data = JSON.parse(trimmed) as Record<string, unknown>;
    for (const key of ['error', 'message', 'detail']) {
      const value = data[key];
      if (typeof value === 'string' && value.trim()) return value.trim();
      if (value && typeof value === 'object') return JSON.stringify(value);
    }
  } catch {
    return trimmed;
  }

  return trimmed;
};

const getErrorCause = (error: unknown) =>
  error && typeof error === 'object' && 'cause' in error
    ? (error as { cause?: unknown }).cause
    : undefined;

const getErrorMessage = async (error: unknown): Promise<string> => {
  const messages = new Set<string>();

  const collect = async (value: unknown) => {
    if (!value) return;
    if (typeof value === 'string') {
      const message = parseRelineErrorText(value);
      if (message) messages.add(message);
      return;
    }
    if (value instanceof Error) {
      await collect(value.message);
      await collect(getErrorCause(value));
      return;
    }
    if (value instanceof Blob) {
      await collect(await value.text());
      return;
    }
    if (typeof value !== 'object') return;

    const response = value as {
      message?: unknown;
      responseText?: string;
      response?: unknown;
      status?: number;
      statusText?: string;
      error?: unknown;
      detail?: unknown;
      cause?: unknown;
    };
    await collect(response.error);
    await collect(response.detail);
    await collect(response.message);
    const responseMessage = await parseRelineError(response);
    if (responseMessage) messages.add(responseMessage);
    await collect(response.cause);
  };

  await collect(error);
  return [...messages].join('\n');
};

const appendRelineHint = (message: string) => {
  const serverUrl = normalizeServerUrl();
  const lowerMessage = message.toLowerCase();
  const hints: string[] = [];

  if (
    lowerMessage.includes('failed to fetch') ||
    lowerMessage.includes('gm_xmlhttprequest error') ||
    lowerMessage.includes('network') ||
    lowerMessage.includes('timeout')
  )
    hints.push(
      `Cannot reach ${serverUrl}. Start the API service in Reline GUI and check the service URL.`,
    );

  if (
    lowerMessage.includes('upscale node skipped the image') ||
    lowerMessage.includes('model') ||
    lowerMessage.includes('no such file') ||
    lowerMessage.includes('not found')
  )
    hints.push(
      'Check that the selected Reline model files still exist, then apply/reload the API config.',
    );

  if (
    lowerMessage.includes('folder_reader') ||
    lowerMessage.includes('folder_writer') ||
    lowerMessage.includes('api_output')
  )
    hints.push(
      'Check the API pipeline: it needs a reader node and an output node that can return the processed image.',
    );

  if (hints.length === 0) return message;
  return `${message}\n${[...new Set(hints)].join('\n')}`;
};

const upload = async (blob: Blob, pageIndex: number) => {
  const formData = new FormData();
  const ext = blob.type.split('/').at(-1) || 'png';
  const pageName = String(Math.max(0, pageIndex) + 1).padStart(4, '0');
  formData.append('file', new File([blob], `${pageName}.${ext}`, { type: blob.type }));

  const res = await request<Blob>(`${normalizeServerUrl()}/upscale`, {
    method: 'POST',
    responseType: 'blob',
    timeout: 1000 * 120,
    fetch: false,
    data: formData,
    noTip: true,
    noCheckCode: true,
    errorText: rt('upload_failed', 'Failed to upload image to Reline'),
  });
  if (res.status !== 200) {
    throw new Error(
      `${rt('request_failed', 'Reline API request failed')}: ${await parseRelineError(
        res,
      )}`,
    );
  }

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
    const resultBlob = await upload(blob, store.imgList.indexOf(url));
    const item = saveCache(getCacheKey(url), resultBlob, url);
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
    const message =
      appendRelineHint(await getErrorMessage(error)) ||
      rt('failed', 'Reline upscale failed');
    setState('imgMap', url, {
      relineUpscaleType: 'error',
      relineUpscaleMessage: message,
    });
    toast.error(message);
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
