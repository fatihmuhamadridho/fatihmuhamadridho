import { Skeleton } from '@mantine/core';
import React, { forwardRef } from 'react';

interface LongDescriptionSectionProps {
  isLoading?: boolean;
  __html?: string;
}

const LongDescriptionSection = forwardRef<HTMLElement, LongDescriptionSectionProps>((props, ref) => {
  const { isLoading = false, __html = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' } =
    props;
  return (
    <section ref={ref} className="mb-[144px]">
      {Array.from({ length: isLoading ? 4 : 1 }).map((_, index) => (
        <Skeleton key={index} mt={24} w="100%" h={isLoading ? 120 : '100%'} radius="md" visible={isLoading}>
          <div
            dangerouslySetInnerHTML={{
              __html: __html || '',
            }}
          />
        </Skeleton>
      ))}
    </section>
  );
});

LongDescriptionSection.displayName = 'LongDescriptionSection';
export default LongDescriptionSection;
