import { toast } from 'components/Toast';
import { createEffectOn, log, t } from 'helper';
import { createSignal } from 'solid-js';

import { setState, store } from '../../store';
import { type ComicImg } from '../../store/image';
import { activePage } from '../memo';
import { BridgeClient } from './client';
import { ReadingQueue, type ReadingTarget, readingWindow } from './queue';

export const [chainnerReaderVisible, setChainnerReaderVisible] =
  createSignal(false);
export const isChainnerUpscale = () =>
  chainnerReaderVisible() &&
  !store.isMobile &&
  store.option.imgRecognition.upscale &&
  store.option.upscaleProvider === 'chainner';

const variant = (img: ComicImg) =>
  img.translationType === 'show' && img.translationUrl
    ? img.translationUrl
    : 'original';

export const chainnerImageUrl = (img: ComicImg) => {
  if (!isChainnerUpscale()) return;
  const version = variant(img);
  if (version === 'original') return img.chainnerOriginalUrl;
  return img.chainnerTranslatedSource === version
    ? img.chainnerTranslatedUrl
    : undefined;
};

let client: BridgeClient | undefined;
let queue: ReadingQueue | undefined;
let fingerprint = '';
let configuration = '';
let generation = 0;
let heartbeat: ReturnType<typeof setInterval> | undefined;
let targets: ReadingTarget[] = [];
let retainUrls = new Set<string>();
const [retryVersion, setRetryVersion] = createSignal(0);
export const [chainnerConnection, setChainnerConnection] = createSignal('');

const updateImage = (target: ReadingTarget, url?: string) => {
  if (!store.imgMap[target.url]) return;
  if (target.key.endsWith('\0original'))
    setState('imgMap', target.url, {
      chainnerOriginalUrl: url,
      ...(url ? {} : { chainnerMessage: undefined }),
    });
  else if (
    url ||
    store.imgMap[target.url].chainnerTranslatedSource === target.source
  )
    setState('imgMap', target.url, {
      chainnerTranslatedUrl: url,
      chainnerTranslatedSource: url ? target.source : undefined,
      ...(url ? {} : { chainnerMessage: undefined }),
    });
};

const makeQueue = (processor: BridgeClient) =>
  new ReadingQueue({
    processor,
    onResult: updateImage,
    onState: (target, state) => {
      if (store.imgMap[target.url])
        setState(
          'imgMap',
          target.url,
          'chainnerMessage',
          t(`chainner.${state}`),
        );
    },
    onError: (target, error) => {
      log.error('chaiNNer image request failed', error);
      if (store.imgMap[target.url])
        setState(
          'imgMap',
          target.url,
          'chainnerMessage',
          `${t('chainner.failed')}: ${(error as Error).message}`,
        );
    },
  });

const stop = () => {
  generation += 1;
  if (heartbeat) clearInterval(heartbeat);
  heartbeat = undefined;
  queue?.dispose();
  queue = undefined;
  client = undefined;
  fingerprint = '';
};

window.addEventListener('pagehide', () => {
  configuration = '';
  stop();
});
window.addEventListener('pageshow', (event) => {
  if (event.persisted) retryChainner();
});

const start = async (key: string) => {
  stop();
  const current = generation;
  setChainnerConnection(t('chainner.connecting'));
  try {
    const processor = new BridgeClient(store.option.chainner);
    const status = await processor.status();
    if (current !== generation || configuration !== key) return;
    client = processor;
    ({ fingerprint } = status);
    queue = makeQueue(processor);
    queue.reconcile(targets, retainUrls);
    setChainnerConnection(t('chainner.connected'));
    let checking = false;
    heartbeat = setInterval(() => {
      if (checking) return;
      checking = true;
      void processor
        .status()
        .then((next) => {
          if (current !== generation) return;
          if (next.fingerprint !== fingerprint) {
            ({ fingerprint } = next);
            queue?.dispose();
            queue = makeQueue(processor);
            queue.reconcile(targets, retainUrls);
          }
          return setChainnerConnection(
            t(next.paused ? 'chainner.paused' : 'chainner.connected'),
          );
        })
        .catch((error: unknown) => {
          if (current !== generation) return;
          stop();
          setChainnerConnection(
            `${t('chainner.failed')}: ${(error as Error).message}`,
          );
        })
        .finally(() => {
          checking = false;
        });
    }, 5000);
  } catch (error) {
    if (current === generation)
      setChainnerConnection(
        `${t('chainner.failed')}: ${(error as Error).message}`,
      );
  }
};

export const retryChainner = () => setRetryVersion((value) => value + 1);

export const testChainner = async () => {
  try {
    await new BridgeClient(store.option.chainner).status();
    toast.success(t('chainner.connected'));
    retryChainner();
  } catch (error) {
    toast.error(`${t('chainner.failed')}: ${(error as Error).message}`);
  }
};

export const clearChainnerCache = async () => {
  try {
    const processor = client ?? new BridgeClient(store.option.chainner);
    stop();
    // Cancellation reaches the server before this request; an active GPU job
    // may still finish, in which case the user can retry clearing after it ends.
    await processor.clearCache();
    toast.success(t('chainner.cache_cleared'));
  } catch (error) {
    toast.error(`${t('chainner.failed')}: ${(error as Error).message}`);
  } finally {
    retryChainner();
  }
};

createEffectOn(
  () => {
    const enabled = isChainnerUpscale();
    const config = store.option.chainner;
    const key = JSON.stringify([
      enabled,
      config.serverUrl,
      config.token,
      retryVersion(),
    ]);
    const visible = store.option.scrollMode.enabled
      ? [
          ...new Set(
            store.pageList
              .slice(store.showRange[0], store.showRange[1] + 1)
              .flat(),
          ),
        ].filter((index) => index >= 0)
      : activePage();
    const indexes = readingWindow(
      visible,
      store.imgList.length,
      config.preload,
    );
    const current = new Set(visible);
    return {
      enabled,
      key,
      images: indexes.map((index) => {
        const url = store.imgList[index];
        const img = store.imgMap[url];
        return {
          url,
          source: variant(img),
          loaded: img.loadType === 'loaded',
          waitingTranslation: img.translationType === 'wait',
          priority: current.has(index) ? 0 : index + 1,
        };
      }),
    };
  },
  ({ enabled, key, images }) => {
    retainUrls = new Set(images.map((img) => img.url));
    targets = enabled
      ? images
          .filter((img) => img.loaded && !img.waitingTranslation)
          .map((img) => ({
            key: `${img.url}\0${img.source}`,
            url: img.url,
            source: img.source === 'original' ? img.url : img.source,
            priority: img.priority,
          }))
      : [];
    if (!enabled || images.length === 0) {
      configuration = '';
      stop();
      setChainnerConnection('');
    } else if (configuration === key) {
      queue?.reconcile(targets, retainUrls);
    } else {
      configuration = key;
      void start(key);
    }
  },
);
