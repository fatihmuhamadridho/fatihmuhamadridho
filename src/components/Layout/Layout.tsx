import React from "react";
import Cursor from "../Cursor/Cursor";
import { Box, Center } from "@mantine/core";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = (props: LayoutProps) => {
  const { children, title } = props;
  return (
    <React.Fragment>
      <Head>
        <title>{title || ""}</title>
      </Head>
      <Center className="h-full bg-ui-primary">
        <Cursor />
        <Box className="px-[96px] w-full max-w-7xl min-h-screen">
          {children}
        </Box>
      </Center>
    </React.Fragment>
  );
};

export default Layout;
