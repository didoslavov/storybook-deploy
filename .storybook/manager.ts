import { addons } from '@storybook/manager-api';

// Configure Storybook for GitHub Pages deployment
addons.setConfig({
  // Check if we're in production mode on GitHub Pages
  base: window.location.hostname !== 'localhost' ? '/storybook-deploy/' : '/'
});
