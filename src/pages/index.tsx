import Parallax from "@/components/atoms/Parallax/Parallax";
import Default from "@/components/templates/Default/Default";
import { Center, Container, Divider, Flex, Stack, Text } from "@mantine/core";
import { IconMapPinPin } from "@tabler/icons-react";
import React from "react";

const HomePage = () => {
  return (
    <Default title="Fatih Muhamad Ridho">
      <Container
        className="relative overflow-hidden flex flex-col items-center justify-center"
        mih={700}
        fluid
        p={0}
      >
        <Parallax />
        <Center pb={100} mih={700}>
          <Flex maw={500} direction={"column"} align={"center"} gap={12}>
            <Text
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#969699] to-[#1E1E22]"
              fz={56}
              fw={700}
            >
              Hi I&apos;m Fatih
            </Text>
            <Flex align={"center"} gap={8}>
              <IconMapPinPin />
              <Text fz={18} fw={500}>
                Tangerang, Indonesia
              </Text>
            </Flex>
            <Text fz={18} fw={400} align="center">
              2 years in Frontend Development, skilled in React.js and Next.js, shaping impressive
              web interfaces.
            </Text>
          </Flex>
        </Center>
      </Container>
      <Container mih={700} p={0}>
        <Stack spacing={32}>
          <Text fz={42} fw={700} align="center">
            About Me
          </Text>
          <Text>
            The Generator App is an online tool that helps you to export ready-made templates ready
            to work as your future website. It helps you to combine slides, panels and other
            components and export it as a set of static files: HTML/CSS/JS.
          </Text>
          <Text>Work Experience</Text>
          <Divider />
          <Text>Education</Text>
          <Divider />
        </Stack>
      </Container>
      <Container mih={700} p={0}>
        <Text fz={42} fw={700} align="center">
          Portofolio
        </Text>
        <Text>
          Probably the section you are most interested in. Have fun exploring some of my recent
          projects and maybe come back afterwewards
        </Text>
      </Container>
      <Container mih={700} p={0}>
        <Text>For any questions please mail us:</Text>
      </Container>
    </Default>
  );
};

export default HomePage;
