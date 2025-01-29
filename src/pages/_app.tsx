import '@/shared/styles/globals.scss';
import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { AnimatePresence } from 'motion/react';

const theme = createTheme({
  breakpoints: {
    xs: '36em',
    sm: '40em',
    md: '48em',
    lg: '64em',
    xl: '80em',
    '2xl': '96em',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </AnimatePresence>
  );
}
