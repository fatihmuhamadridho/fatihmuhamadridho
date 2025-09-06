import '@mantine/core/styles.css';
import '@/shared/styles/globals.scss';

import type { AppProps } from 'next/app';

import React from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'motion/react';
import { NextIntlClientProvider } from 'next-intl';
import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import localesEn from '../locales/en.json';

const theme = createTheme({
  breakpoints: { xs: '36em', sm: '40em', md: '48em', lg: '64em', xl: '80em', '2xl': '96em' },
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 15,
      cacheTime: 1000 * 60 * 20,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <React.Fragment>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <QueryClientProvider client={queryClient}>
        <NextIntlClientProvider
          locale={router.locale}
          timeZone="Asia/Jakarta"
          messages={pageProps?.messages || localesEn}
        >
          <AnimatePresence mode="wait" initial={false}>
            <MantineProvider theme={theme}>
              <Component {...pageProps} />
            </MantineProvider>
          </AnimatePresence>
        </NextIntlClientProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}
