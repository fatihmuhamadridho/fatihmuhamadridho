import { ColorSwatch, Flex, Skeleton, Text } from "@mantine/core";
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandTwitter,
  IconMapPinFilled,
} from "@tabler/icons-react";
import React from "react";

const HeroSection = () => {
  return (
    <Flex py={96} px={80 + 32} gap={48}>
      <Flex direction={"column"} gap={48}>
        <Flex direction={"column"}>
          <Text maw={500} fz={60} fw={700} lh={"72px"} ta="start" color="#F9FAFB">
            Hi, I&apos;m Fatih
          </Text>
          <Text fz={16} fw={400} lh={"24px"} color="#D1D5DB">
            I&apos;m a full stack developer (React.js & Node.js) with a focus on creating (and
            occasionally designing) exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. Even though I have been creating web applications
            for over 7 years, I still love it as if it was something new.
          </Text>
        </Flex>
        <Flex direction={"column"} gap={8}>
          <Flex align={"center"} gap={8}>
            <IconMapPinFilled />
            <Text fz={16} fw={400} lh={"24px"} color="#D1D5DB">
              Tangerang, Indonesia
            </Text>
          </Flex>
          <Flex align={"center"} gap={14}>
            <ColorSwatch ml={6} color="#10B981" size={12} />
            <Text fz={16} fw={400} lh={"24px"} color="#D1D5DB">
              Available for new projects
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Flex p={6}>
            <IconBrandGithub size={24} />
          </Flex>
          <Flex p={6}>
            <IconBrandTwitter size={24} />
          </Flex>
          <Flex p={6}>
            <IconBrandFigma size={24} />
          </Flex>
        </Flex>
      </Flex>
      <Flex maw={400} pt={0} p={40} w={"100%"} h={"auto"} justify={"end"}>
        <Skeleton width={280} height={320} />
      </Flex>
    </Flex>
  );
};

export default HeroSection;
