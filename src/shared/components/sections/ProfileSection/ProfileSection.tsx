import { Box, Divider, Flex, Group, Stack, Text } from '@mantine/core';
import { Icon, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconProps } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

interface ProfileSectionProps {
  activeSection: string;
  scrollToSection: (sectionName: string) => void;
}

interface listMediaSocialProps {
  href: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
}

const ProfileSection = (props: ProfileSectionProps) => {
  const { activeSection, scrollToSection } = props;
  const menuItems = ['about', 'experience', 'project'];
  const listMediaSocial: listMediaSocialProps[] = [
    {
      href: 'https://github.com/fatihmuhamadridho',
      icon: IconBrandGithub,
    },
    {
      href: 'https://www.linkedin.com/in/fatihmuhamadridho/',
      icon: IconBrandLinkedin,
    },
    {
      href: 'https://www.instagram.com/fatihmuhamadridho/',
      icon: IconBrandInstagram,
    },
  ];

  return (
    <Stack className="relative top-0 pt-[96px] w-full max-h-screen lg:sticky lg:w-1/2 lg:py-[96px]" gap={4}>
      <Flex h={'100%'} direction={'column'} justify={'space-between'}>
        <Stack gap={64}>
          <Box>
            <Text fz={48} fw={700} lh={1}>
              Fatih M. Ridho
            </Text>

            <Text mt={12} fz={20}>
              Software Engineer
            </Text>
            <Text className="!text-ui-secondary" mt={16} maw={320} fz={16}>
              I build accessible, pixel-perfect digital experiences for the web.
            </Text>
          </Box>
          <Box visibleFrom="md">
            {menuItems.map((item) => (
              <Group key={item} className="max-w-max group cursor-pointer" py={12} onClick={() => scrollToSection(item)}>
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
                  {item}
                </Text>
              </Group>
            ))}
          </Box>
        </Stack>
        <Group mt={{ base: 20, md: 0 }} gap={20}>
          {listMediaSocial.map((item) => (
            <Link key={item.href} href={item.href} target="__blank">
              <item.icon className="transition-all stroke-[gray] cursor-pointer hover:stroke-white" size={28} />
            </Link>
          ))}
        </Group>
      </Flex>
    </Stack>
  );
};

export default ProfileSection;
