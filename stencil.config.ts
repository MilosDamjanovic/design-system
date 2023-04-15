import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'nst',
  plugins: [sass()],
  buildEs5: 'prod',
  globalScript: 'stencil/global/app.ts',
  globalStyle: 'stencil/global/app.scss',
  taskQueue: 'async',
  srcDir: 'stencil',
  outputTargets: [
    {
      type: 'dist',
      copy: [
        {
          src: '../*.{jpg,png}',
          dest: 'assets',
          warn: true,
        },
      ],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
