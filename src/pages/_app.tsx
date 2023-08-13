import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, Overlay } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { SectionProvider } from "@/contexts/section/SectionProvider";
import { AuthProvider } from "@/contexts/AuthContext/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
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
        {/* <AuthProvider> */}
        <SectionProvider>
          <Component {...pageProps} />
        </SectionProvider>
        {/* </AuthProvider> */}
      </MantineProvider>
    </QueryClientProvider>
  );
}
