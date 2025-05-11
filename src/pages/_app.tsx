import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize MSW in development environment only
    async function enableMocking() {
      if (process.env.NODE_ENV !== 'development') {
        return;
      }

      const { worker } = await import('../mocks/browser');
      // Start the worker
      await worker.start({
        onUnhandledRequest: 'bypass'
      });
    }

    enableMocking();
  }, []);

  return <Component {...pageProps} />;
}
