import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { storybookHandlers } from '../src/mocks/storybook-mocks';

// Determine if we're on GitHub Pages
const isGitHubPages =
  typeof window !== 'undefined' &&
  window.location.hostname.includes('github.io');

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    // When on GitHub Pages, use absolute path to repository
    url: isGitHubPages
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
    msw: {
      handlers: storybookHandlers
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
