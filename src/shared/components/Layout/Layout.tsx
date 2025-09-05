import React from 'react';
import Cursor from '../Cursor/Cursor';
import { Box, Center } from '@mantine/core';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Center className="h-full bg-ui-primary">
      <Cursor />
      <Box className="px-[24px] w-full max-w-7xl min-h-screen md:px-[48px] lg:px-[96px]">{children}</Box>
    </Center>
  );
};

export default Layout;
