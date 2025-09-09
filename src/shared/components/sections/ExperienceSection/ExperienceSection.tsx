import { DateUtil } from '@/utils/date.util';
import { Box, Group, Skeleton, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import React, { forwardRef } from 'react';

interface ExperienceSectionProps {
  isLoading?: boolean;
  data?: any[];
  locale?: string;
  buttonText?: string;
}

const ExperienceSection = forwardRef<HTMLElement, ExperienceSectionProps>((props, ref) => {
  const { isLoading, data = [], locale = 'id', buttonText } = props;

  const isPresentLocale = (locale: 'id' | 'en') => {
    if (locale === 'en') {
      return 'PRESENT';
    } else {
      return 'SEKARANG';
    }
  };

  if (isLoading) {
    return (
      <section ref={ref} className="mb-[144px]">
        {Array.from({ length: 4 }).map((item, index) => (
          <Skeleton key={index} mt={24} w={'100%'} h={250} radius={'md'} />
        ))}
        <Link href={'/Fatih Muhamad Ridho-resume.pdf'} locale={false} target="__blank">
          <Box className="cursor-pointer hover:text-[#5eead4]">{buttonText}</Box>
        </Link>
      </section>
    );
  }

  return (
    <section ref={ref} className="mb-[144px]">
      {data
        ?.filter((itemData) => itemData.is_show)
        .map((item, index) => (
          <Box key={index} className="relative mb-[48px] py-2 px-2 grid grid-cols-8 gap-4 cursor-pointer group">
            <Box className="absolute block -inset-x-4 -inset-y-4 z-0 rounded-md group-hover:drop-shadow-lg group-hover:bg-[#1e293b80]"></Box>
            <Text className="col-span-2 !text-xs z-10" fw={500} tt={'uppercase'}>
              {DateUtil.getMonthYearText(item.start_date, locale)} -{' '}
              {!item.is_present ? DateUtil.getMonthYearText(item.end_date, locale) : isPresentLocale(locale as any)}
            </Text>
            <Stack className="col-span-6 z-10" gap={12}>
              <Text className="!leading-tight">
                {item.role} - {item.company}
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
        ))}
      <Link href={'/Fatih Muhamad Ridho-resume.pdf'} locale={false} target="__blank">
        <Box className="cursor-pointer hover:text-[#5eead4]">{buttonText}</Box>
      </Link>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';
export default ExperienceSection;
