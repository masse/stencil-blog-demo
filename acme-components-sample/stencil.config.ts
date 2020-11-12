import {Config} from '@stencil/core';
import {sass} from "@stencil/sass";

export const config: Config = {
  namespace: 'acme-components-sample',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy:[{src:'native-component-example.html'}, {src:'bag-*.png'}]
    },
  ],
  plugins: [
    sass()
  ]
};
