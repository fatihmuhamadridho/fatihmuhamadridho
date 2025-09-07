import { Box, Group, Skeleton, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { forwardRef } from 'react';

interface ProjectSectionProps {
  isLoading?: boolean;
  data?: any[];
  locale?: string;
  buttonText?: string;
}

const ProjectSection = forwardRef<HTMLElement, ProjectSectionProps>((props, ref) => {
  const { isLoading, data = [], locale = 'id', buttonText } = props;

  if (isLoading) {
    return (
      <section ref={ref} className="mb-[144px]">
        {Array.from({ length: 4 }).map((item, index) => (
          <Skeleton key={index} mt={24} w={'100%'} h={200} radius={'md'} />
        ))}
        <Link href={'/archive'}>
          <Box className="cursor-pointer hover:text-[#5eead4]">{buttonText}</Box>
        </Link>
      </section>
    );
  }

  return (
    <section ref={ref} className="mb-[144px]">
      {data
        ?.filter((data) => data.is_favorite)
        .slice(0, 4)
        .map((item, index) => {
          if (index < 4 && item.is_favorite)
            return (
              <Box key={index} className="relative mb-[48px] py-2 px-2 grid grid-cols-8 gap-4 cursor-pointer group">
                <Box className="absolute block -inset-x-4 -inset-y-4 z-0 rounded-md group-hover:drop-shadow-lg group-hover:bg-[#1e293b80]"></Box>
                <Image
                  className="col-span-2 z-10 rounded"
                  src={item.thumbnail}
                  alt={item.title}
                  width={200}
                  height={48}
                  loading="lazy"
                />
                <Stack className="col-span-6 z-10" gap={12}>
                  <Text className="!leading-tight">
                    {item.role} - {item.made_at}
                  </Text>
                  <Text className="!text-ui-secondary" fz={14}>
                    {item.description[locale]}
                  </Text>
                  <Group>
                    {item.tools.map((badge: any) => (
                      <Box key={badge} className="text-[#5eead4] bg-[#2dd4bf1a] rounded-full" py={2} px={12} fz={12}>
                        {badge}
                      </Box>
                    ))}
                  </Group>
                </Stack>
              </Box>
            );
          return null;
        })}
      <Link href={'/archive'}>
        <Box className="cursor-pointer hover:text-[#5eead4]">{buttonText}</Box>
      </Link>
    </section>
  );
});

export default ProjectSection;
