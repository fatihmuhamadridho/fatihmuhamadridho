import Default from "@/components/templates/Default/Default";
import React, { useState } from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrightnessHalf,
  IconCheck,
  IconDownload,
  IconLink,
} from "@tabler/icons-react";
import {
  Avatar,
  BackgroundImage,
  Center,
  Flex,
  Group,
  Image,
  Overlay,
  Paper,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  UnstyledButton,
  clsx,
} from "@mantine/core";
import { useHomePage } from "./useHomePage";

const PortofolioCard = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { currentNav, setCurrentNav, handleOpenUrl } = useHomePage();

  return (
    <Skeleton
      visible={false}
      className="overflow-hidden"
      w={"100%"}
      h={226}
      radius={16}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Paper
        className={clsx(
          "absolute p-4 z-10 bg-[black]/[0.5] flex flex-col justify-end gap-3 opacity-0 transition-all translate-y-[226px]",
          `${visible && "opacity-100 translate-y-0"}`
        )}
        w={"100%"}
        h={"100%"}
      >
        <Stack spacing={0}>
          <Text fz={12} color="white">
            Web
          </Text>
          <Text fz={22} color="white">
            Wates Village
          </Text>
        </Stack>
        <Group spacing={12}>
          <IconLink
            className="cursor-pointer"
            color="white"
            onClick={() => handleOpenUrl("https://wates.vercel.app/")}
          />
          <IconBrandGithub
            className="cursor-pointer"
            color="white"
            onClick={() => handleOpenUrl("https://github.com/fatihmuhamadridho/wates")}
          />
        </Group>
      </Paper>
      <Image src={"./images/wates_thumb.png"} alt="wates-thumb" height={226} />
    </Skeleton>
  );
};

const HomePageDekstop = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { currentNav, setCurrentNav, handleOpenUrl } = useHomePage();

  return (
    <Default title="Fatih Muhamad Ridho">
      {/* <Center>
        <IconBrightnessHalf className="p-5 bg-white rounded-full" size={40 + 5 * 8} />
      </Center> */}
      <Stack mt={65} spacing={40}>
        <Center>
          <Flex gap={40} align={"center"}>
            <Avatar
              src={"./favicon-test.ico"}
              w={"100%"}
              h={"100%"}
              maw={192}
              mah={192}
              radius={99999}
            />
            <Flex w={"100%"} direction={"column"}>
              <Text fz={46} fw={500} color="#3D3D3D">
                Fatih Muhamad Ridho
              </Text>
              <Stack spacing={12}>
                <Text fz={22} fw={500} color="#575757">
                  Frontend Developer
                </Text>
                <Group spacing={26}>
                  <IconBrandGithub
                    className="cursor-pointer"
                    size={32}
                    onClick={() => handleOpenUrl("https://github.com/fatihmuhamadridho")}
                  />
                  <IconBrandLinkedin
                    className="cursor-pointer"
                    size={32}
                    onClick={() => handleOpenUrl("https://www.linkedin.com/in/fatihmuhamadridho/")}
                  />
                  <IconBrandInstagram
                    className="cursor-pointer"
                    size={32}
                    onClick={() => handleOpenUrl("https://www.instagram.com/fatihmuhamadridho/")}
                  />
                </Group>
              </Stack>
            </Flex>
          </Flex>
        </Center>
        <Center>
          <Flex py={20} w={"100%"} maw={630} gap={90} justify={"space-between"}>
            <Stack align="center">
              <Text fz={24} fw={500} color="#3D3D3D" align="center">
                2
              </Text>
              <Text fz={22} fw={500} color="#575757" align="center">
                Years of work experience
              </Text>
            </Stack>
            <Stack align="center">
              <Text fz={24} fw={500} color="#3D3D3D" align="center">
                1
              </Text>
              <Text fz={22} fw={500} color="#575757" align="center">
                Completed projects
              </Text>
            </Stack>
            <Stack align="center">
              <Text fz={24} fw={500} color="#3D3D3D" align="center">
                0
              </Text>
              <Text fz={22} fw={500} color="#575757" align="center">
                Satisfied customers
              </Text>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex w={"100%"} maw={630} justify={"space-between"} gap={40}>
            <a className="w-full" href={"./files/Fatih_Muhamad_Ridho-resume.pdf"} download>
              {" "}
              <UnstyledButton className="bg-[#FBD144] rounded-[10px]" py={24} w={"100%"}>
                <Flex align={"center"} justify="center" gap={8}>
                  <Text fz={22} fw={500} color="#3D3D3D">
                    Download CV
                  </Text>
                  <IconDownload />
                </Flex>
              </UnstyledButton>
            </a>
            <UnstyledButton
              className="bg-[#FFFFFF] rounded-[10px]"
              py={24}
              w={"100%"}
              onClick={() => handleOpenUrl("https://wa.me/+6282110797472")}
            >
              <Center>
                <Text fz={22} fw={500} color="#3D3D3D">
                  Contact me
                </Text>
              </Center>
            </UnstyledButton>
          </Flex>
        </Center>
      </Stack>
      <Stack mt={75} spacing={75}>
        <Paper py={16} px={24} radius={20}>
          <Flex justify={"space-between"} gap={16}>
            <Text
              className="rounded-[10px] cursor-pointer transition-all"
              w={"100%"}
              py={24}
              fz={22}
              fw={500}
              align="center"
              bg={currentNav === 1 ? "#D7D7D7" : "none"}
              onClick={() => setCurrentNav(1)}
            >
              Portofolio
            </Text>
            <Text
              className="rounded-[10px] cursor-pointer transition-all"
              w={"100%"}
              py={24}
              fz={22}
              fw={500}
              align="center"
              bg={currentNav === 2 ? "#D7D7D7" : "none"}
              onClick={() => setCurrentNav(2)}
            >
              Skills
            </Text>
          </Flex>
        </Paper>
        {currentNav === 1 && (
          <SimpleGrid cols={2} verticalSpacing={48} spacing={32}>
            <PortofolioCard />
            <Skeleton w={"100%"} h={226} radius={16} />
            <Skeleton w={"100%"} h={226} radius={16} />
            <Skeleton w={"100%"} h={226} radius={16} />
            <Skeleton w={"100%"} h={226} radius={16} />
            <Skeleton w={"100%"} h={226} radius={16} />
          </SimpleGrid>
        )}
        {currentNav === 2 && (
          <SimpleGrid className="transition-all" cols={2} spacing={48}>
            <Stack spacing={24}>
              <Text fz={22} fw={500} align="center">
                Frontend Developer
              </Text>
              <SimpleGrid className="justify-items-center" cols={2}>
                <Group w={"100%"} maw={120} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={24} />
                  <Stack spacing={0}>
                    <Text fz={16}>React Js</Text>
                    <Text fz={14}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={120} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={24} />
                  <Stack spacing={0}>
                    <Text fz={16}>Next Js</Text>
                    <Text fz={14}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={120} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={24} />
                  <Stack spacing={0}>
                    <Text fz={16}>TypeScript</Text>
                    <Text fz={14}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={120} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={24} />
                  <Stack spacing={0}>
                    <Text fz={16}>JavaScript</Text>
                    <Text fz={14}>Basic</Text>
                  </Stack>
                </Group>
              </SimpleGrid>
            </Stack>
            <Stack spacing={24}>
              <Text fz={22} fw={500} align="center">
                Backend Developer
              </Text>
              <SimpleGrid className="justify-items-center" cols={2}>
                <Group w={"100%"} maw={120} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={24} />
                  <Stack spacing={0}>
                    <Text fz={16}>Node Js</Text>
                    <Text fz={14}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={120} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={24} />
                  <Stack spacing={0}>
                    <Text fz={16}>Express Js</Text>
                    <Text fz={14}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={120} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={24} />
                  <Stack spacing={0}>
                    <Text fz={16}>MySQL</Text>
                    <Text fz={14}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={120} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={24} />
                  <Stack spacing={0}>
                    <Text fz={16}>MongoDB</Text>
                    <Text fz={14}>Basic</Text>
                  </Stack>
                </Group>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>
        )}
      </Stack>
      <Text mt={120} fz={14} fw={500} align="center">
        ©Fatih Muhamad Ridho. 2023 All rigths reserved
      </Text>
    </Default>
  );
};

export default HomePageDekstop;
