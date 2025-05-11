import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
  serviceWorker: {
    url:
      process.env.NODE_ENV === 'production'
        ? '/storybook-deploy/mockServiceWorker.js'
        : '/mockServiceWorker.js'
  }
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  loaders: [mswLoader]
};

export default preview;
