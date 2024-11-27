import "@/styles/globals.scss";
import "@mantine/core/styles.css";

import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";
import { AnimatePresence } from "motion/react";

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </AnimatePresence>
  );
}
