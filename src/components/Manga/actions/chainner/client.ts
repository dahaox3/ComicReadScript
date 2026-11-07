import { type RequestDetails, downloadImg, request } from 'request';

import { type ImageRequest } from './queue';

export type BridgeStatus = {
  protocol: number;
  fingerprint: string;
  paused: boolean;
  queued: number;
};

export type BridgeJob = {
  id: string;
  state: 'queued' | 'processing' | 'ready' | 'cancelled' | 'failed';
  cached: boolean;
  error?: string;
};

export type BridgeConfig = { serverUrl: string; token: string };

export class BridgeHttpError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(`chaiNNer HTTP ${status}: ${message}`);
    this.name = 'BridgeHttpError';
    this.status = status;
  }
}

const delay = (signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const aborted = () => {
      clearTimeout(timer);
      reject(new DOMException('Aborted', 'AbortError'));
    };
    const timer = setTimeout(() => {
      signal.removeEventListener('abort', aborted);
      resolve();
    }, 300);
    signal.addEventListener('abort', aborted, { once: true });
    if (signal.aborted) aborted();
  });

export class BridgeClient {
  readonly baseUrl: string;
  readonly config: BridgeConfig;

  constructor(config: BridgeConfig) {
    this.config = { ...config };
    const url = new URL(config.serverUrl);
    if (
      url.protocol !== 'http:' ||
      !['127.0.0.1', 'localhost'].includes(url.hostname) ||
      url.username ||
      url.password ||
      config.token.length < 16
    )
      throw new Error(
        'Use a local HTTP address and a token of at least 16 characters.',
      );
    this.baseUrl = url.origin;
  }

  async api<T>(path: string, details: RequestDetails<T> = {}): Promise<T> {
    const res = await request<T>(`${this.baseUrl}/v1${path}`, {
      responseType: 'json',
      timeout: 15_000,
      noTip: true,
      noCheckCode: true,
      fetch: false,
      ...details,
      headers: { Authorization: `Bearer ${this.config.token}` },
    });
    if (res.status !== 200) {
      const data = res.response;
      const message =
        data instanceof Blob
          ? await data.text()
          : JSON.stringify(data || res.responseText);
      throw new BridgeHttpError(res.status, message);
    }
    return res.response;
  }

  async status(signal?: AbortSignal) {
    const status = await this.api<BridgeStatus>('/status', { signal });
    if (status.protocol !== 1 || !status.fingerprint)
      throw new Error('Unsupported chaiNNer image service.');
    return status;
  }

  async process({
    source,
    id,
    priority,
    signal,
    onState,
  }: ImageRequest): Promise<Blob> {
    onState('downloading');
    const blob = await downloadImg(source, { signal, noTip: true });
    signal.throwIfAborted();
    const form = new FormData();
    form.append('image', blob, 'page');
    form.append('request_id', id);
    form.append('priority', String(priority));
    const deadline = Date.now() + 10 * 60_000;
    let job: BridgeJob;
    while (true) {
      signal.throwIfAborted();
      try {
        onState('uploading');
        job = await this.api<BridgeJob>('/jobs', {
          method: 'POST',
          data: form,
          timeout: 60_000,
          signal,
        });
        break;
      } catch (error) {
        if (
          !(error instanceof BridgeHttpError) ||
          ![429, 503].includes(error.status) ||
          Date.now() >= deadline
        )
          throw error;
        onState('queued');
        await delay(signal);
      }
    }
    while (job.state !== 'ready') {
      signal.throwIfAborted();
      onState(job.state);
      if (job.state === 'failed' || job.state === 'cancelled')
        throw new Error(job.error || job.state);
      if (Date.now() > deadline) throw new Error('chaiNNer job timed out.');
      await delay(signal);
      job = await this.api<BridgeJob>(`/jobs/${id}`, { signal });
    }
    onState('receiving');
    return await this.api<Blob>(`/jobs/${id}/result`, {
      responseType: 'blob',
      timeout: 60_000,
      signal,
    });
  }

  cancel(id: string) {
    return this.api<BridgeJob>(`/jobs/${id}`, { method: 'DELETE' });
  }

  reprioritize(id: string, priority: number) {
    return this.api<BridgeJob>(`/jobs/${id}/priority`, {
      method: 'POST',
      data: JSON.stringify({ priority }),
    });
  }

  clearCache() {
    return this.api('/cache', { method: 'DELETE' });
  }
}
