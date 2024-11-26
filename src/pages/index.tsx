import { Layout } from "@/components";
import { Box, Divider, Flex, Group, Stack, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import React from "react";

const HomePage = () => {
  return (
    <Layout title="Fatih Muhamad Ridho">
      <Flex gap={16}>
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
                <Text className="!text-ui-primary" mt={16} maw={320} fz={16}>
                  I build accessible, pixel-perfect digital experiences for the
                  web.
                </Text>
              </Box>
              <Box>
                <Group className="group cursor-pointer" py={12}>
                  <Divider
                    className="w-[32px] transition-all group-hover:!w-[64px] group-hover:!border-[white]"
                    color="#94a3b8"
                    size={1}
                  />
                  <Text
                    fz={12}
                    fw={700}
                    className="!text-ui-primary group-hover:!text-white"
                  >
                    ABOUT
                  </Text>
                </Group>
                <Group className="group cursor-pointer" py={12}>
                  <Divider
                    className="w-[32px] transition-all group-hover:!w-[64px] group-hover:!border-[white]"
                    color="#94a3b8"
                    size={1}
                  />
                  <Text
                    fz={12}
                    fw={700}
                    className="!text-ui-primary group-hover:!text-white"
                  >
                    EXPERIENCE
                  </Text>
                </Group>
                <Group className="group cursor-pointer" py={12}>
                  <Divider
                    className="w-[32px] transition-all group-hover:!w-[64px] group-hover:!border-[white]"
                    color="#94a3b8"
                    size={1}
                  />
                  <Text
                    fz={12}
                    fw={700}
                    className="!text-ui-primary group-hover:!text-white"
                  >
                    PROJECTS
                  </Text>
                </Group>
              </Box>
            </Stack>
            <Group gap={20}>
              <IconBrandGithub
                className="transition-all stroke-[gray] cursor-pointer hover:stroke-white"
                size={28}
              />
              <IconBrandLinkedin
                className="transition-all stroke-[gray] cursor-pointer hover:stroke-white"
                size={28}
              />
              <IconBrandInstagram
                className="transition-all stroke-[gray] cursor-pointer hover:stroke-white"
                size={28}
              />
            </Group>
          </Flex>
        </Stack>
        <Stack className="py-[96px] w-1/2">
          <Text>
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability. Currently,
            I&apos;m a Senior Front-End Engineer at Klaviyo, specializing in
            accessibility. I contribute to the creation and maintenance of UI
            components that power Klaviyo’s frontend, ensuring our platform
            meets web accessibility standards and best practices to deliver an
            inclusive user experience. In the past, I&apos;ve had the
            opportunity to develop software across a variety of settings — from
            advertising agencies and large corporations to start-ups and small
            digital product studios. Additionally, I also released a
            comprehensive video course a few years ago, guiding learners through
            building a web app with the Spotify API. In my spare time, I’m
            usually climbing, reading, hanging out with my wife and two cats, or
            running around Hyrule searching for Korok seeds K o r o k s e e d s
            .
          </Text>
          <Text>
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability. Currently,
            I&apos;m a Senior Front-End Engineer at Klaviyo, specializing in
            accessibility. I contribute to the creation and maintenance of UI
            components that power Klaviyo’s frontend, ensuring our platform
            meets web accessibility standards and best practices to deliver an
            inclusive user experience. In the past, I&apos;ve had the
            opportunity to develop software across a variety of settings — from
            advertising agencies and large corporations to start-ups and small
            digital product studios. Additionally, I also released a
            comprehensive video course a few years ago, guiding learners through
            building a web app with the Spotify API. In my spare time, I’m
            usually climbing, reading, hanging out with my wife and two cats, or
            running around Hyrule searching for Korok seeds K o r o k s e e d s
            .
          </Text>
          <Text>
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability. Currently,
            I&apos;m a Senior Front-End Engineer at Klaviyo, specializing in
            accessibility. I contribute to the creation and maintenance of UI
            components that power Klaviyo’s frontend, ensuring our platform
            meets web accessibility standards and best practices to deliver an
            inclusive user experience. In the past, I&apos;ve had the
            opportunity to develop software across a variety of settings — from
            advertising agencies and large corporations to start-ups and small
            digital product studios. Additionally, I also released a
            comprehensive video course a few years ago, guiding learners through
            building a web app with the Spotify API. In my spare time, I’m
            usually climbing, reading, hanging out with my wife and two cats, or
            running around Hyrule searching for Korok seeds K o r o k s e e d s
            .
          </Text>
          <Text>
            I’m a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability. Currently,
            I&apos;m a Senior Front-End Engineer at Klaviyo, specializing in
            accessibility. I contribute to the creation and maintenance of UI
            components that power Klaviyo’s frontend, ensuring our platform
            meets web accessibility standards and best practices to deliver an
            inclusive user experience. In the past, I&apos;ve had the
            opportunity to develop software across a variety of settings — from
            advertising agencies and large corporations to start-ups and small
            digital product studios. Additionally, I also released a
            comprehensive video course a few years ago, guiding learners through
            building a web app with the Spotify API. In my spare time, I’m
            usually climbing, reading, hanging out with my wife and two cats, or
            running around Hyrule searching for Korok seeds K o r o k s e e d s
            .
          </Text>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default HomePage;
