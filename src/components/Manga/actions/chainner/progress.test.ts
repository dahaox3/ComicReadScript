import { describe, expect, it } from 'vitest';

import { type ComicImg } from '../../store/image';
import { chainnerImageProgress, clearChainnerProgress } from './progress';

const image = (): ComicImg => ({
  src: 'https://images.invalid/page.webp',
  loadType: 'loaded',
  size: { width: 100, height: 150 },
});

describe('chaiNNer progress markers', () => {
  it('keeps completed markers after releasing the high-resolution Blob', () => {
    const img = { ...image(), chainnerOriginalDone: true };
    expect(img.chainnerOriginalUrl).toBeUndefined();
    expect(chainnerImageProgress(img)).toBe('ready');
  });

  it('does not mark a new translation as completed using the original or an older translation', () => {
    const img: ComicImg = {
      ...image(),
      chainnerOriginalDone: true,
      translationType: 'show',
      translationUrl: 'blob:new-translation',
      chainnerTranslatedDoneSource: 'blob:old-translation',
    };
    expect(chainnerImageProgress(img)).toBeUndefined();
    img.chainnerProgress = { source: 'blob:new-translation', state: 'loading' };
    expect(chainnerImageProgress(img)).toBe('loading');
    img.chainnerTranslatedDoneSource = 'blob:new-translation';
    expect(chainnerImageProgress(img)).toBe('ready');
    img.translationType = 'hide';
    expect(chainnerImageProgress(img)).toBe('ready');
  });

  it('shows errors only on the matching image variant', () => {
    const img = image();
    img.chainnerProgress = { source: img.src, state: 'error' };
    expect(chainnerImageProgress(img)).toBe('error');
    img.translationType = 'show';
    img.translationUrl = 'blob:translation';
    expect(chainnerImageProgress(img)).toBeUndefined();
  });

  it('invalidates completion markers when the workflow or cache changes', () => {
    const img: ComicImg = {
      ...image(),
      chainnerOriginalDone: true,
      chainnerTranslatedDoneSource: 'blob:translation',
      chainnerProgress: { source: 'blob:translation', state: 'ready' },
    };
    clearChainnerProgress(img);
    expect(chainnerImageProgress(img)).toBeUndefined();
    expect(img.chainnerTranslatedDoneSource).toBeUndefined();
    expect(img.chainnerProgress).toBeUndefined();
  });
});
