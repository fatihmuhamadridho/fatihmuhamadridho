import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import Splash from "@/components/atoms/splash";
import { SectionProvider } from "@/contexts/section/SectionProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);

  setTimeout(() => {
    setLoading(false);
  }, 250);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        cacheTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <SectionProvider>
          {loading && <Splash />}
          {!loading && <Component {...pageProps} />}
        </SectionProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
