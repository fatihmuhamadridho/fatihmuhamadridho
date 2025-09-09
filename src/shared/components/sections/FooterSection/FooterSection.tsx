import { Text } from '@mantine/core';
import React from 'react';

interface FooterSectionProps {
  text?: string;
}

const FooterSection = (props: FooterSectionProps) => {
  const { text } = props;
  return (
    <section>
      <Text className="!text-ui-secondary" fz={14} maw={{ lg: 448 }}>
        {text}
      </Text>
    </section>
  );
};

export default FooterSection;
