import '../src/app/styles/globals.css';
import React from 'react';

import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AuthProvider } from '../src/providers/AuthProvider';
import { Notification } from '../src/shared/ui-kit';


const inter = Inter();
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }));

  return (
    <>
      <style jsx global>
        {`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}
      </style>
      <Head>
        <title>My page title</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
          <Notification />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
