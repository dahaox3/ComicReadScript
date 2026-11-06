import { describe, expect, it, vi } from 'vitest';

import {
  type ImageRequest,
  ReadingQueue,
  type ReadingTarget,
  readingWindow,
} from './queue';

const target = (
  url: string,
  source = 'original',
  priority = 0,
): ReadingTarget => ({
  url,
  key: `${url}\0${source}`,
  source: source === 'original' ? url : source,
  priority,
});

const setup = () => {
  const pending: {
    request: ImageRequest;
    resolve: (blob: Blob) => void;
    reject: (error: Error) => void;
  }[] = [];
  const process = vi.fn<(request: ImageRequest) => Promise<Blob>>(
    (request) =>
      new Promise<Blob>((resolve, reject) => {
        pending.push({ request, resolve, reject });
      }),
  );
  const cancel = vi
    .fn<(id: string) => Promise<void>>()
    .mockResolvedValue(undefined);
  const reprioritize = vi
    .fn<(id: string, priority: number) => Promise<void>>()
    .mockResolvedValue(undefined);
  const onResult = vi.fn<(target: ReadingTarget, url?: string) => void>();
  const onError = vi.fn<(target: ReadingTarget, error: unknown) => void>();
  const onState = vi.fn<(target: ReadingTarget, state: string) => void>();
  let counter = 0;
  const objectUrls = {
    create: vi.fn<(blob: Blob) => string>(() => `blob:result-${++counter}`),
    revoke: vi.fn<(url: string) => void>(),
  };
  const queue = new ReadingQueue({
    processor: { process, cancel, reprioritize },
    onResult,
    onState,
    onError,
    objectUrls,
  });
  return {
    queue,
    process,
    cancel,
    reprioritize,
    pending,
    onResult,
    onError,
    objectUrls,
  };
};

describe('chaiNNer reading window', () => {
  it('includes both visible images and two following images', () => {
    expect(readingWindow([2, 3], 20, 2)).toStrictEqual([2, 3, 4, 5]);
    expect(readingWindow([-1, 19], 20, 2)).toStrictEqual([19]);
    expect(readingWindow([], 0, 2)).toStrictEqual([]);
    expect(readingWindow([], 3, 2)).toStrictEqual([0, 1, 2]);
  });

  it('does not duplicate work and promotes a prefetched page', () => {
    const state = setup();
    state.queue.reconcile([target('page', 'original', 4)], new Set(['page']));
    state.queue.reconcile([target('page')], new Set(['page']));
    expect(state.process).toHaveBeenCalledTimes(1);
    expect(state.reprioritize).toHaveBeenCalledWith(
      state.pending[0].request.id,
      0,
    );
    state.queue.dispose();
  });

  it('ignores late results even after returning to the same page', async () => {
    const state = setup();
    state.queue.reconcile([target('old')], new Set(['old']));
    state.queue.reconcile([target('new')], new Set(['new']));
    expect(state.pending[0].request.signal.aborted).toBe(true);
    state.queue.reconcile([target('old')], new Set(['old']));
    state.pending[0].resolve(new Blob(['stale']));
    state.pending[1].resolve(new Blob(['also stale']));
    state.pending[2].resolve(new Blob(['current']));
    await vi.waitFor(() =>
      expect(state.objectUrls.create).toHaveBeenCalledTimes(1),
    );
    expect(state.onResult).toHaveBeenCalledWith(target('old'), 'blob:result-1');
    state.queue.dispose();
  });

  it('keeps original and translated results separate, and releases URLs on exit', async () => {
    const state = setup();
    state.queue.reconcile([target('page')], new Set(['page']));
    state.pending[0].resolve(new Blob(['original']));
    await vi.waitFor(() =>
      expect(state.objectUrls.create).toHaveBeenCalledTimes(1),
    );
    state.queue.reconcile(
      [target('page', 'blob:translated')],
      new Set(['page']),
    );
    expect(state.pending[1].request.source).toBe('blob:translated');
    state.pending[1].resolve(new Blob(['translated']));
    await vi.waitFor(() =>
      expect(state.objectUrls.create).toHaveBeenCalledTimes(2),
    );
    state.queue.reconcile([target('page')], new Set(['page']));
    expect(state.process).toHaveBeenCalledTimes(2);
    expect(state.onResult).toHaveBeenLastCalledWith(
      target('page'),
      'blob:result-1',
    );
    state.queue.dispose();
    expect(state.objectUrls.revoke).toHaveBeenCalledTimes(2);
  });

  it('leaves errors for explicit retry and cancels subscriptions', async () => {
    const state = setup();
    state.queue.reconcile([target('page')], new Set(['page']));
    state.pending[0].reject(new Error('GPU unavailable'));
    await vi.waitFor(() => expect(state.onError).toHaveBeenCalledTimes(1));
    state.queue.reconcile([target('page')], new Set(['page']));
    expect(state.process).toHaveBeenCalledTimes(1);
    expect(state.cancel).toHaveBeenCalledWith(state.pending[0].request.id);
    state.queue.dispose();
  });
});
