import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize({
  onUnhandledRequest: 'bypass'
});

const isGithubPages = location.hostname.endsWith('github.io');
const serviceWorkerUrl = isGithubPages
  ? '/mockServiceWorker.js'
  : '/mockServiceWorker.js';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    msw: {
      handlers: [],
      serviceWorker: {
        url: serviceWorkerUrl
      }
    },
    docs: {
      story: {
        inline: true,
        iframeHeight: 400
      }
    }
  },
  loaders: [mswLoader]
};

export default preview;
