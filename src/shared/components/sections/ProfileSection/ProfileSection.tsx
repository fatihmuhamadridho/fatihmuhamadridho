import { User } from '@/core/domains/models/user.model';
import { Box, Divider, Flex, Group, Stack, Text, UnstyledButton } from '@mantine/core';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface ProfileSectionProps {
  activeSection: string;
  scrollToSection: (sectionName: string) => void;
  profileData?: User;
  locale?: string;
}

const ProfileSection = (props: ProfileSectionProps) => {
  const { activeSection, scrollToSection, profileData, locale = 'id' } = props;
  const router = useRouter();
  const tData = useTranslations('profile');
  const menuItems = ['about', 'experience', 'project'];

  const handleChangeLocale = (locale: 'id' | 'en') => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    router.push('/', undefined, { locale: locale, scroll: false });
  };

  const mappingSocialMedia = (value: string) => {
    switch (value) {
      case 'linkedin':
        return (
          <IconBrandLinkedin className="transition-all stroke-[gray] cursor-pointer hover:stroke-white" size={28} />
        );
      case 'instagram':
        return (
          <IconBrandInstagram className="transition-all stroke-[gray] cursor-pointer hover:stroke-white" size={28} />
        );
      case 'whatsapp':
        return (
          <IconBrandWhatsapp className="transition-all stroke-[gray] cursor-pointer hover:stroke-white" size={28} />
        );
      default:
        return <IconBrandGithub className="transition-all stroke-[gray] cursor-pointer hover:stroke-white" size={28} />;
    }
  };

  return (
    <Stack className="relative top-0 pt-[96px] w-full max-h-screen lg:sticky lg:w-1/2 lg:py-[96px]" gap={4}>
      <Flex h={'100%'} direction={'column'} justify={'space-between'}>
        <Stack gap={64}>
          <Box>
            <Text fz={48} fw={700} lh={1}>
              {profileData?.fullname}
            </Text>

            <Text mt={12} fz={20}>
              {profileData?.detail.role}
            </Text>
            <Text className="!text-ui-secondary" mt={16} maw={320} fz={16}>
              {profileData?.detail.short_description[locale]}
            </Text>
          </Box>
          <Box visibleFrom="md">
            {menuItems.map((item) => (
              <Group
                key={item}
                className="max-w-max group cursor-pointer"
                py={12}
                onClick={() => scrollToSection(item)}
              >
                <Divider
                  className={`${activeSection === item ? 'w-[64px]' : 'w-[32px]'} transition-all group-hover:!w-[64px] group-hover:!border-[white]`}
                  color="#94a3b8"
                  size={1}
                />
                <Text
                  fz={12}
                  fw={700}
                  className={`${activeSection === item ? '!text-white' : '!text-ui-secondary'} uppercase group-hover:!text-white`}
                >
                  {tData('tabs.' + item)}
                </Text>
              </Group>
            ))}
          </Box>
        </Stack>
        <Flex mt={{ base: 20, md: 0 }} gap={16} maw={300} justify={'space-between'}>
          <Group gap={20}>
            {profileData?.detail.social_media.map((item) => (
              <Link key={item.url} href={item.url} target="__blank">
                {mappingSocialMedia(item.icon)}
              </Link>
            ))}
          </Group>
          <Flex gap={16} align={'center'}>
            {router?.locales?.map((item) => (
              <React.Fragment key={item}>
                <UnstyledButton
                  className={`uppercase ${router.locale === item ? '!text-white' : '!text-gray-400'} hover:!text-white`}
                  onClick={() => handleChangeLocale(item as 'id' | 'en')}
                >
                  {item}
                </UnstyledButton>
              </React.Fragment>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default ProfileSection;
