import { Flex, Skeleton, Text } from "@mantine/core";
import { IconBrandFigma, IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import React from "react";

const HeroSection = () => {
  return (
    <Flex py={96} px={80 + 32} gap={48}>
      <Flex direction={"column"} gap={48}>
        <Flex direction={"column"}>
          <Text>Hi, I&apos;m Fatih Muhamad Ridho</Text>
          <Text>
            I&apos;m a full stack developer (React.js & Node.js) with a focus on creating (and
            occasionally designing) exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. Even though I have been creating web applications
            for over 7 years, I still love it as if it was something new.
          </Text>
        </Flex>
        <Flex direction={"column"}>
          <Text>Ahmedabad, India</Text>
          <Text>Available for new projects</Text>
        </Flex>
        <Flex>
          <IconBrandGithub />
          <IconBrandTwitter />
          <IconBrandFigma />
        </Flex>
      </Flex>
      <Skeleton width={"100%"} height={320} />
    </Flex>
  );
};

export default HeroSection;
