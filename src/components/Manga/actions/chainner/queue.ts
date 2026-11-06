/** Reading-window scheduling, isolated from Solid and the network for testing. */
export type ReadingTarget = {
  key: string;
  url: string;
  source: string;
  priority: number;
};

export type ImageProcessor = {
  process: (request: ImageRequest) => Promise<Blob>;
  cancel: (id: string) => Promise<unknown>;
  reprioritize: (id: string, priority: number) => Promise<unknown>;
};

export type ImageRequest = {
  source: string;
  id: string;
  priority: number;
  signal: AbortSignal;
  onState: (state: string) => void;
};
type QueueOptions = {
  processor: ImageProcessor;
  onResult: (target: ReadingTarget, url?: string) => void;
  onState: (target: ReadingTarget, state: string) => void;
  onError: (target: ReadingTarget, error: unknown) => void;
  objectUrls?: {
    create: (blob: Blob) => string;
    revoke: (url: string) => void;
  };
};

export const readingWindow = (
  visible: number[],
  count: number,
  ahead: number,
) => {
  const current = visible.filter((i) => i >= 0 && i < count);
  if (current.length === 0 && count > 0) current.push(0);
  const last = Math.max(0, ...current);
  return [
    ...current,
    ...Array.from(
      {
        length: Number.isFinite(ahead)
          ? Math.max(0, Math.min(8, Math.floor(ahead)))
          : 2,
      },
      (_, i) => last + i + 1,
    ).filter((i) => i < count),
  ];
};

export class ReadingQueue {
  private desired = new Map<string, ReadingTarget>();
  private readonly tasks = new Map<
    string,
    { id: string; controller: AbortController; priority: number }
  >();
  private readonly results = new Map<
    string,
    { url: string; target: ReadingTarget }
  >();
  private readonly attempted = new Set<string>();

  private readonly processor: ImageProcessor;
  private readonly onResult: QueueOptions['onResult'];
  private readonly onState: QueueOptions['onState'];
  private readonly onError: QueueOptions['onError'];
  private readonly objectUrls: NonNullable<QueueOptions['objectUrls']>;

  constructor(options: QueueOptions) {
    this.processor = options.processor;
    this.onResult = options.onResult;
    this.onState = options.onState;
    this.onError = options.onError;
    this.objectUrls = options.objectUrls ?? {
      create: (blob) => URL.createObjectURL(blob),
      revoke: (url) => URL.revokeObjectURL(url),
    };
  }

  reconcile(targets: ReadingTarget[], retainUrls: Set<string>) {
    this.desired = new Map(targets.map((target) => [target.key, target]));
    for (const [key, task] of this.tasks) {
      const target = this.desired.get(key);
      if (!target) {
        task.controller.abort();
        void this.processor.cancel(task.id).catch(() => {});
        this.tasks.delete(key);
        this.attempted.delete(key);
      } else if (task.priority !== target.priority) {
        task.priority = target.priority;
        void this.processor
          .reprioritize(task.id, target.priority)
          .catch(() => {});
      }
    }
    for (const [key, result] of this.results) {
      // Keep one original and the current translated variant per retained page.
      if (
        !retainUrls.has(result.target.url) ||
        (!key.endsWith('\0original') && !this.desired.has(key))
      ) {
        this.onResult(result.target, undefined);
        this.objectUrls.revoke(result.url);
        this.results.delete(key);
        this.attempted.delete(key);
      }
    }
    for (const key of this.attempted)
      if (!this.desired.has(key) && !this.results.has(key))
        this.attempted.delete(key);
    for (const target of targets) {
      const result = this.results.get(target.key);
      if (result) {
        this.onResult(target, result.url);
        continue;
      }
      if (this.attempted.has(target.key)) continue;
      this.attempted.add(target.key);
      const id = crypto.randomUUID();
      const controller = new AbortController();
      const task = { id, controller, priority: target.priority };
      this.tasks.set(target.key, task);
      this.onState(target, 'queued');
      void this.processor
        .process({
          source: target.source,
          id,
          priority: target.priority,
          signal: controller.signal,
          onState: (state) => {
            if (this.tasks.get(target.key) === task)
              this.onState(target, state);
          },
        })
        .then((blob) => {
          if (
            controller.signal.aborted ||
            this.tasks.get(target.key) !== task ||
            !this.desired.has(target.key)
          )
            return;
          const url = this.objectUrls.create(blob);
          this.results.set(target.key, { url, target });
          this.onResult(target, url);
          return this.onState(target, 'ready');
        })
        .catch((error: unknown) => {
          if (!controller.signal.aborted && this.tasks.get(target.key) === task)
            this.onError(target, error);
        })
        .finally(() => {
          if (this.tasks.get(target.key) === task)
            this.tasks.delete(target.key);
          // Also remove server-side subscriptions after successful downloads.
          void this.processor.cancel(id).catch(() => {});
        });
    }
  }

  dispose() {
    this.reconcile([], new Set());
    this.attempted.clear();
  }
}
