import { request } from 'request';
// @vitest-environment jsdom
// oxlint-disable vitest/prefer-called-times -- conflicts with prefer-called-once
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock(
  import('helper'),
  () =>
    ({
      log: { error: () => {} },
      sleep: () => Promise.resolve(),
      t: () => '',
      exposeToGlobal: () => {},
    }) as unknown as typeof import('helper'),
);
vi.mock(
  import('components/Toast'),
  () =>
    ({
      toast: { error: () => {} },
    }) as unknown as typeof import('components/Toast'),
);
describe('gM request cancellation cleanup', () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('releases the signal listener after each successful poll', async () => {
    const controller = new AbortController();
    const added = vi.spyOn(controller.signal, 'addEventListener');
    const removed = vi.spyOn(controller.signal, 'removeEventListener');
    const response = {
      status: 200,
      response: { ready: true },
      responseText: '',
    } as Tampermonkey.Response<unknown>;
    vi.stubGlobal(
      'GM_xmlhttpRequest',
      (details: Tampermonkey.Request<unknown>) => {
        queueMicrotask(() => details.onload?.call(response, response));
        return { abort: () => {} };
      },
    );
    for (let i = 0; i < 20; i++)
      await request('http://127.0.0.1:5004/v1/status', {
        fetch: false,
        signal: controller.signal,
        responseType: 'json',
      });
    expect(added).toHaveBeenCalledTimes(20);
    expect(removed).toHaveBeenCalledTimes(20);
    expect(removed.mock.calls[0][1]).toBe(added.mock.calls[0][1]);
  });

  it('aborts an already-cancelled upload immediately', async () => {
    const controller = new AbortController();
    controller.abort();
    const aborted = vi.fn<() => void>();
    vi.stubGlobal(
      'GM_xmlhttpRequest',
      (details: Tampermonkey.Request<unknown>) => ({
        abort: () => {
          aborted();
          details.onabort?.();
        },
      }),
    );
    await expect(
      request('http://127.0.0.1:5004/v1/jobs', {
        fetch: false,
        noTip: true,
        signal: controller.signal,
      }),
    ).rejects.toThrow('Request aborted');
    expect(aborted).toHaveBeenCalledOnce();
  });

  it('ends a stalled GM request even if the manager never reports timeout or abort', async () => {
    vi.useFakeTimers();
    const aborted = vi.fn<() => void>();
    const controller = new AbortController();
    const removed = vi.spyOn(controller.signal, 'removeEventListener');
    const transport = vi.fn<
      (details: Tampermonkey.Request<unknown>) => { abort: () => void }
    >((details) => {
      expect(details.signal).toBeUndefined();
      return { abort: aborted };
    });
    vi.stubGlobal('GM_xmlhttpRequest', transport);
    const result = request('https://images.invalid/page.webp', {
      fetch: false,
      timeout: 50,
      signal: controller.signal,
      noTip: true,
    });
    const error = result.catch((error: Error) => error);
    await vi.advanceTimersByTimeAsync(50);
    expect(((await error) as Error).message).toContain('Request timed out');
    expect(aborted).toHaveBeenCalledOnce();
    expect(removed).toHaveBeenCalledOnce();
  });

  it('cancels locally without waiting for GM callbacks and does not retry a cancelled download', async () => {
    const controller = new AbortController();
    const transport = vi.fn<() => { abort: () => void }>(() => ({
      abort: () => {},
    }));
    const fetch = vi.fn<typeof window.fetch>();
    vi.stubGlobal('GM_xmlhttpRequest', transport);
    vi.stubGlobal('fetch', fetch);
    const result = request('https://images.invalid/page.webp', {
      fetch: false,
      retryFetch: true,
      signal: controller.signal,
      noTip: true,
    });
    controller.abort();
    await expect(result).rejects.toThrow('Request aborted');
    expect(transport).toHaveBeenCalledOnce();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('retains the HTTPS protocol when downloading protocol-relative image URLs', async () => {
    let target = '';
    vi.stubGlobal('location', {
      href: 'https://reader.invalid/chapter',
      origin: 'https://reader.invalid',
      protocol: 'https:',
    });
    vi.stubGlobal(
      'GM_xmlhttpRequest',
      (details: Tampermonkey.Request<unknown>) => {
        target = details.url;
        const response = {
          status: 200,
          response: 'image',
          responseText: '',
        } as Tampermonkey.Response<unknown>;
        queueMicrotask(() => details.onload?.call(response, response));
        return { abort: () => {} };
      },
    );
    await request('//images.invalid/page.webp', { fetch: false });
    expect(target).toBe('https://images.invalid/page.webp');
  });

  it('keeps the fetch deadline when the caller supplies its own cancellation signal', async () => {
    // Use native Node signals: jsdom does not implement AbortSignal.any.
    const { AbortController: NativeController, AbortSignal: NativeSignal } =
      await import('node:vm').then(({ runInThisContext }) =>
        runInThisContext('({AbortController, AbortSignal})'),
      );
    // Trigger the deadline explicitly instead of depending on real timers.
    const timeout = new NativeController();
    const controller = new NativeController();
    const timeoutFactory = vi
      .spyOn(NativeSignal, 'timeout')
      .mockReturnValue(timeout.signal);
    vi.stubGlobal('AbortSignal', NativeSignal);
    vi.stubGlobal(
      'fetch',
      (_url: string, init: RequestInit) =>
        new Promise((_resolve, reject) => {
          init.signal?.addEventListener('abort', () =>
            reject(new Error(String(init.signal?.reason))),
          );
        }),
    );
    const result = request('http://127.0.0.1:5004/v1/jobs', {
      fetch: true,
      timeout: 50,
      signal: controller.signal,
      noTip: true,
    });
    const error = result.catch((error: Error) => error);
    timeout.abort(new DOMException('Request timed out', 'TimeoutError'));
    expect(((await error) as Error).message).toContain('Request timed out');
    expect(timeoutFactory).toHaveBeenCalledWith(50);
    expect(controller.signal.aborted).toBe(false);
  });
});
