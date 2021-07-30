import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'cap',
  plugins: [sass()],
  globalScript: 'src/global.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: '**/*.m.scss', dest: './sass' }],
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
      footer: '',
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [{ src: '**/*.m.scss', dest: './sass' }],
    },
  ],
}
