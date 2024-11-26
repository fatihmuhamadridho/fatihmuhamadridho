import React from "react";
import Cursor from "../Cursor/Cursor";
import { Box, Center } from "@mantine/core";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Center className="h-full">
      <Cursor />
      <Box className="px-[96px] w-full max-w-7xl min-h-screen">{children}</Box>
    </Center>
  );
};

export default Layout;
