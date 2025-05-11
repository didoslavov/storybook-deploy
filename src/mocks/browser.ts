import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Initialize and export the MSW worker
export const worker = setupWorker(...handlers);
