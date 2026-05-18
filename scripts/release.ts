// @ts-expect-error release-it does not include a default export declaration.
import release from 'release-it';
import shell from 'shelljs';

import packageJson from '../package.json';
import { pathResolve } from './lib/utils';

const exec = (...commands: string[]) => {
  const res = shell.exec(commands.join(' && '), {
    silent: false,
    fatal: true,
  });
  if (res.code !== 0) shell.exit(1);
  return res;
};

void (async () => {
  if (process.argv.slice(2).includes('push')) {
    const { version } = packageJson;

    exec('pnpm build');

    exec(
      'git add .',
      `git commit -m "chore: :bookmark: Release ${version}"`,
      `git tag --annotate v${version} --message="Release ${version}"`,
      'git push --follow-tags',
      'npm publish',
    );
    return;
  }

  exec('pnpm check');
  exec('pnpm test run');

  const { changelog } = await release({
    ci: true,
    npm: { publish: false },
    git: {
      requireCommits: true,
      commit: false,
      tag: false,
      push: false,
    },
    plugins: {
      '@release-it/conventional-changelog': {
        preset: 'conventionalcommits',
        infile: 'docs/.other/CHANGELOG.md',
      },
    },
  });

  shell.echo(changelog).to(pathResolve('./docs/.other/LatestChange.md'));
})();
