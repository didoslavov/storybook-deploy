import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Cast the handlers to any to avoid type incompatibilities between MSW versions
export const worker = setupWorker(...(handlers as any));
