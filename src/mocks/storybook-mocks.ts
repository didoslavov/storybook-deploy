import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Initialize and export the MSW worker specifically for Storybook
export const worker = setupWorker(...handlers);

// This function starts the worker and is called by msw-storybook-addon
export const startWorker = () => worker.start({ onUnhandledRequest: 'bypass' });

// This file contains handlers specifically for Storybook
export const storybookHandlers = [...handlers];
