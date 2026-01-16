import React from 'react';
import Cursor from '../Cursor/Cursor';
import { Box, Center } from '@mantine/core';
import { useTrackVisit } from '@/hooks/visitor.hook';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  useTrackVisit();
  return (
    <Center className="h-full bg-ui-primary">
      <Cursor />
      <Box className="px-[24px] w-full max-w-7xl min-h-screen transition-all md:px-[48px] lg:px-[6.7vw]">
        {children}
      </Box>
    </Center>
  );
};

export default Layout;
