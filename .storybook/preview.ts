import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW with minimal configuration
initialize({
  onUnhandledRequest: 'bypass'
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
    // Each story should define its own handlers
    msw: {
      handlers: []
    },
    // Important: Reset handlers between stories
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
