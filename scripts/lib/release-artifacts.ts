import { copyFileSync, writeFileSync } from 'node:fs';

import { pathResolve, readFile } from './utils';

const toJsDelivrResourceUrl = (
  _all: string,
  name: string,
  version: string,
  file: string,
) => `cdn.jsdelivr.net/npm/${name}@${version}/${file}`;

export const copyReleaseArtifacts = () => {
  copyFileSync(pathResolve('dist/index.js'), pathResolve('ComicRead.user.js'));
  copyFileSync(
    pathResolve('dist/adguard.js'),
    pathResolve('ComicRead-AdGuard.user.js'),
  );
  copyFileSync(pathResolve('dist/umd.js'), pathResolve('ComicReader.umd.js'));
  copyFileSync(
    pathResolve('dist/umd.d.ts'),
    pathResolve('ComicReader.umd.d.ts'),
  );

  const code = readFile(pathResolve('ComicRead.user.js'));
  writeFileSync(
    pathResolve('ComicRead-jsDelivr.user.js'),
    code.replaceAll(
      /registry\.npmmirror\.com\/(.+)\/(\d+\.\d+\.\d)\/files\/(.+)/g,
      toJsDelivrResourceUrl,
    ),
    'utf8',
  );
};
