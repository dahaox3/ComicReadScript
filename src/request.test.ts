import { request } from 'request';
// @vitest-environment jsdom
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
    ).rejects.toThrow('/v1/jobs');
    expect(aborted).toHaveBeenCalledOnce();
  });
});
