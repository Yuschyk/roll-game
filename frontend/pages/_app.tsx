import '../src/app/styles/globals.css';
import React, { ReactElement, ReactNode } from 'react';

import { Inter } from '@next/font/google';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AuthProvider } from '../src/providers/AuthProvider';
import { Notification } from '../src/shared/ui-kit';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const inter = Inter();
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = React.useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }));

  const getLayout = Component.getLayout ?? ((page) => page);

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
            {
              getLayout(<Component {...pageProps} />)
            }
          </AuthProvider>
          <Notification />
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
