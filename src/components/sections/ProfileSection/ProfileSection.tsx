/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Flex, Group, Stack, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface ProfileSectionProps {
  activeSection: string;
  scrollToSection: (sectionName: string) => void;
}

interface listMediaSocialProps {
  url: string;
  icon: any;
}

const ProfileSection = (props: ProfileSectionProps) => {
  const { activeSection, scrollToSection } = props;
  const menuItems = ["about", "experience", "project"];
  const listMediaSocial: listMediaSocialProps[] = [
    {
      url: "https://github.com/fatihmuhamadridho",
      icon: IconBrandGithub,
    },
    {
      url: "https://www.linkedin.com/in/fatihmuhamadridho/",
      icon: IconBrandLinkedin,
    },
    {
      url: "https://www.instagram.com/fatihmuhamadridho/",
      icon: IconBrandInstagram,
    },
  ];

  console.log({ activeSection });

  return (
    <Stack className="sticky top-0 py-[96px] w-1/2 max-h-screen" gap={4}>
      <Flex h={"100%"} direction={"column"} justify={"space-between"}>
        <Stack gap={64}>
          <Box>
            <Text fz={48} fw={700} lh={1}>
              Fatih M. Ridho
            </Text>

            <Text mt={12} fz={20}>
              Front End Engineer
            </Text>
            <Text className="!text-ui-secondary" mt={16} maw={320} fz={16}>
              I build accessible, pixel-perfect digital experiences for the web.
            </Text>
          </Box>
          <Box>
            {menuItems.map((item) => (
              <Group
                key={item}
                className="max-w-max group cursor-pointer"
                py={12}
                onClick={() => scrollToSection(item)}
              >
                <Divider
                  className={`${
                    activeSection === item ? "w-[64px]" : "w-[32px]"
                  } transition-all group-hover:!w-[64px] group-hover:!border-[white]`}
                  color="#94a3b8"
                  size={1}
                />
                <Text
                  fz={12}
                  fw={700}
                  className={`${
                    activeSection === item
                      ? "!text-white"
                      : "!text-ui-secondary"
                  } uppercase group-hover:!text-white`}
                >
                  {item}
                </Text>
              </Group>
            ))}
          </Box>
        </Stack>
        <Group gap={20}>
          {listMediaSocial.map((item) => (
            <Link
              key={item.url}
              href={"https://github.com/fatihmuhamadridho"}
              target="__blank"
            >
              <item.icon
                className="transition-all stroke-[gray] cursor-pointer hover:stroke-white"
                size={28}
              />
            </Link>
          ))}
        </Group>
      </Flex>
    </Stack>
  );
};

export default ProfileSection;
