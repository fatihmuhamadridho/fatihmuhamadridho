import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Cursor from "@/components/atoms/Cursor/Cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
