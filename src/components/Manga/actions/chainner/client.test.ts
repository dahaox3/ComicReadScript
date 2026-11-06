import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { BridgeClient } from './client';

const transport = vi.hoisted(() => ({
  request:
    vi.fn<
      (
        url: string,
        details: Record<string, unknown>,
      ) => Promise<{ status: number; response: unknown; responseText: string }>
    >(),
  downloadImg: vi.fn<() => Promise<Blob>>(),
}));
vi.mock(
  import('request'),
  () => transport as unknown as typeof import('request'),
);

const config = {
  serverUrl: 'http://127.0.0.1:5004',
  token: 'test-access-token-0123456789',
};
const response = (status: number, body: unknown) => ({
  status,
  response: body,
  responseText: '',
});

describe('chaiNNer client', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    transport.request.mockReset();
    transport.downloadImg.mockReset().mockResolvedValue(new Blob(['source']));
  });
  afterEach(() => vi.useRealTimers());

  it('rejects remote addresses and incomplete connection settings', () => {
    expect(
      () => new BridgeClient({ ...config, serverUrl: 'https://example.com' }),
    ).toThrow('local HTTP address');
    expect(() => new BridgeClient({ ...config, token: '' })).toThrow('token');
  });

  it('retries queue backpressure without re-downloading or changing request identity', async () => {
    const client = new BridgeClient(config);
    const blob = new Blob(['result'], { type: 'image/png' });
    transport.request
      .mockResolvedValueOnce(response(429, { error: 'Queue full' }))
      .mockResolvedValueOnce(
        response(200, { id: 'request', state: 'ready', cached: false }),
      )
      .mockResolvedValueOnce(response(200, blob));
    const result = client.process({
      source: 'https://images.invalid/page.png',
      id: 'request',
      priority: 0,
      signal: new AbortController().signal,
      onState: () => {},
    });
    await vi.advanceTimersByTimeAsync(350);
    await expect(result).resolves.toBe(blob);
    expect(transport.downloadImg).toHaveBeenCalledOnce();
    const first = transport.request.mock.calls[0][1].data as FormData;
    const retry = transport.request.mock.calls[1][1].data as FormData;
    expect(first.get('request_id')).toBe(retry.get('request_id'));
    expect(first.get('image')).toBeInstanceOf(Blob);
  });

  it('stops retrying when the reading window cancels the job', async () => {
    const client = new BridgeClient(config);
    const controller = new AbortController();
    transport.request.mockResolvedValue(response(429, { error: 'Queue full' }));
    const result = client.process({
      source: 'source',
      id: 'request',
      priority: 0,
      signal: controller.signal,
      onState: () => controller.abort(),
    });
    await expect(result).rejects.toThrow('Aborted');
    expect(transport.request).toHaveBeenCalledOnce();
  });

  it('does not retry invalid tokens or incompatible servers', async () => {
    transport.request.mockResolvedValueOnce(
      response(401, { error: 'Invalid token' }),
    );
    await expect(new BridgeClient(config).status()).rejects.toThrow('401');
    transport.request.mockResolvedValueOnce(
      response(200, { protocol: 2, fingerprint: 'next' }),
    );
    await expect(new BridgeClient(config).status()).rejects.toThrow(
      'Unsupported',
    );
  });
});
