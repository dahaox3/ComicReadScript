import { type ComicImg } from '../../store/image';

export const chainnerImageSource = (img: ComicImg) =>
  img.translationType === 'show' && img.translationUrl
    ? img.translationUrl
    : img.src;

/** Track completed work without retaining high-resolution images in memory. */
export const chainnerImageProgress = (img: ComicImg) => {
  const source = chainnerImageSource(img);
  if (
    source === img.src
      ? img.chainnerOriginalDone
      : img.chainnerTranslatedDoneSource === source
  )
    return 'ready';
  return img.chainnerProgress?.source === source
    ? img.chainnerProgress.state
    : undefined;
};

export const clearChainnerProgress = (img: ComicImg) => {
  img.chainnerOriginalDone = undefined;
  img.chainnerTranslatedDoneSource = undefined;
  img.chainnerProgress = undefined;
};
