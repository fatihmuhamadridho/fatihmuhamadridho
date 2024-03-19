import React from 'react';
import { MantineProvider, Text } from '@mantine/core';

const TextCore: React.FC = () => (
  <MantineProvider>
    <Text p={16} bg={'black'} c={'white'}>
      test
    </Text>
  </MantineProvider>
);

export { TextCore };
