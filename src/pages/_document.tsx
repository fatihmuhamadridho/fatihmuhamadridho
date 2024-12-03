import { Head, Html, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <ColorSchemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
