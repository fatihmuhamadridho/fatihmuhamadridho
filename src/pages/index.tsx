import Parallax from "@/components/atoms/Parallax/Parallax";
import Default from "@/components/templates/Default/Default";
import {
  Badge,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Paper,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandTypescript,
  IconMapPinPin,
} from "@tabler/icons-react";
import React from "react";

const ExperienceCard = () => {
  return (
    <Stack spacing={0}>
      <Flex align={"center"} justify={"space-between"}>
        <Text fz={20} fw={500}>
          Junior Web Developer
        </Text>
        <Badge color="green">
          <Text fz={10}>Full Time</Text>
        </Badge>
      </Flex>
      <Text fz={14} color="#A7A7A7">
        Jakarta, Indonesia
      </Text>
      <Flex align={"center"} justify={"space-between"}>
        <Text fz={14} color="#A7A7A7">
          PT. Telekomunikasi Indonesia
        </Text>
        <Text fz={14} color="#A7A7A7">
          Aug 2022 - Jul 2023
        </Text>
      </Flex>
      <Divider mt={4} />
    </Stack>
  );
};

const EducationCard = () => {
  return (
    <Stack spacing={0}>
      <Text fz={20} fw={500}>
        Budi Luhur University
      </Text>
      <Text fz={14} color="#A7A7A7">
        Bachelor Degree in Informatics Engineering, 3.86/4.00
      </Text>
      <Flex align={"center"} justify={"space-between"}>
        <Text fz={14} color="#A7A7A7">
          Jakarta, Indonesia
        </Text>
        <Text fz={14} color="#A7A7A7">
          Oct 2019 - Oct 2023
        </Text>
      </Flex>
      <Divider mt={4} />
    </Stack>
  );
};

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
              fz={70}
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
      <Container mih={700} p={0} py={32}>
        <Stack spacing={24}>
          <Text fz={42} fw={700} align="center">
            About Me
          </Text>
          <Text align="center">
            The Generator App is an online tool that helps you to export ready-made templates ready
            to work as your future website. It helps you to combine slides, panels and other
            components and export it as a set of static files: HTML/CSS/JS.
          </Text>
          <Stack spacing={4}>
            <Text fz={24} fw={500}>
              Work Experience
            </Text>
            <Divider />
          </Stack>
          <Stack spacing={8}>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </Stack>
          <Stack spacing={4}>
            <Text fz={24} fw={500}>
              Education
            </Text>
            <Divider />
          </Stack>
          <Stack spacing={8}>
            <EducationCard />
          </Stack>
        </Stack>
      </Container>
      <Container fluid h={"100%"} mih={800} p={0} py={32}>
        <Center mih={800}>
          <Stack maw={940} spacing={62}>
            <Stack spacing={0}>
              <Text fz={42} fw={700} align="center">
                My Tech Stack
              </Text>
              <Text align="center">Technologies I&apos;ve been working with recently</Text>
            </Stack>
            <SimpleGrid
              className="justify-items-center"
              breakpoints={[
                { minWidth: 0, cols: 3 },
                { minWidth: 600, cols: 6 },
              ]}
              spacing={62}
            >
              <IconBrandReact size={100} />
              <IconBrandNextjs size={100} />
              <IconBrandNodejs size={100} />
              <IconBrandReactNative size={100} />
              <IconBrandRedux size={100} />
              <IconBrandMongodb size={100} />
              <IconBrandMysql size={100} />
              <IconBrandMantine size={100} />
              <IconBrandTailwind size={100} />
              <IconBrandSass size={100} />
              <IconBrandTypescript size={100} />
              <IconBrandJavascript size={100} />
              <IconBrandGitlab size={100} />
              <IconBrandGithub size={100} />
              <IconBrandGit size={100} />
              <IconBrandCss3 size={100} />
              <IconBrandHtml5 size={100} />
            </SimpleGrid>
          </Stack>
        </Center>
      </Container>
      <Container mih={700} p={0} py={32}>
        <Stack>
          <Text fz={42} fw={700} align="center">
            Portofolio
          </Text>
          <Text>
            Probably the section you are most interested in. Have fun exploring some of my recent
            projects and maybe come back afterwewards
          </Text>
          <Paper p={32} bg={"#EDF3F5"}>
            <Flex w={"100%"} gap={32} justify={"space-between"}>
              <Stack w={"100%"}>
                <Text fz={24} fw={600}>
                  Fatih Muhamad Ridho
                </Text>
                <Text fz={14}>
                  The vision for the new Advanced Search is simple, let end-users start using Cloud
                  Academy to find specific & cuick information taht they can use and share
                  internally.
                </Text>
              </Stack>
              <Image src={"./images/content.png"} alt="" width={"100%"} height={"auto"} />
            </Flex>
          </Paper>
          <SimpleGrid breakpoints={[{ minWidth: 600, cols: 2 }]}>
            <Paper p={32} bg={"#EAECFB"}>
              <Stack>
                <Text fz={24} fw={600}>
                  Wates
                </Text>
                <Text fz={14}>
                  The vision for the new Advanced Search is simple, let end-users start using Cloud
                  Academy to find specific & cuick information taht they can use and share
                  internally.
                </Text>
                <Image src={"./images/content.png"} alt="" width={"100%"} height={"auto"} />
              </Stack>
            </Paper>
            <Paper p={32} bg={"#EAECFB"}>
              <Stack>
                <Text fz={24} fw={600}>
                  Pornografi Detection
                </Text>
                <Text fz={14}>
                  The vision for the new Advanced Search is simple, let end-users start using Cloud
                  Academy to find specific & cuick information taht they can use and share
                  internally.
                </Text>
                <Image src={"./images/content.png"} alt="" width={"100%"} height={"auto"} />
              </Stack>
            </Paper>
          </SimpleGrid>
        </Stack>
      </Container>
      <Container h={700} p={0}>
        <Center w={"100%"} h={"100%"}>
          <Stack className="truncate" spacing={0}>
            <Text fz={54} fw={700}>
              For any questions please mail us:
            </Text>
            <Text
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#969699] to-[#1E1E22]"
              fz={54}
              fw={700}
            >
              fatihmuhamadridho1@gmail.com
            </Text>
          </Stack>
        </Center>
      </Container>
    </Default>
  );
};

export default HomePage;
