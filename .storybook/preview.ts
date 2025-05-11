import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass', // Don't warn about unhandled requests
  serviceWorker: {
    // Use the base path with repo name in GitHub Pages environment
    url:
      typeof window !== 'undefined' && (window as any).STORYBOOK_DEPLOYED
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
    },
    // Ensure MSW handles all API requests
    msw: {
      handlers: []
    }
  },
  loaders: [mswLoader]
};

export default preview;
