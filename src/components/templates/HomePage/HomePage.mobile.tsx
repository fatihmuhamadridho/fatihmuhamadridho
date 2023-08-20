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
      h={210}
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
      <Image src={"./images/wates_thumb.png"} alt="wates-thumb" height={210} />
    </Skeleton>
  );
};

const HomePageMobile = () => {
  const { currentNav, setCurrentNav, handleOpenUrl } = useHomePage();

  return (
    <Default title="Fatih Muhamad Ridho">
      <Stack spacing={24}>
        {/* <Center>
          <IconBrightnessHalf className="p-3 bg-white rounded-full" size={24 + 3 * 8} />
        </Center> */}
        <Center>
          <Flex direction={"column"} gap={40} align={"center"}>
            <Avatar
              src={"./favicon-test.ico"}
              w={"100%"}
              h={"100%"}
              maw={107}
              mah={107}
              radius={99999}
            />
            <Flex w={"100%"} direction={"column"}>
              <Text fz={28} fw={500} color="#3D3D3D" align="center">
                Fatih Muhamad Ridho
              </Text>
              <Stack spacing={20}>
                <Text fz={14} fw={500} color="#575757" align="center">
                  Frontend Developer
                </Text>
                <Group spacing={26} position="center">
                  <IconBrandGithub
                    className="cursor-pointer"
                    size={24}
                    onClick={() => handleOpenUrl("https://github.com/fatihmuhamadridho")}
                  />
                  <IconBrandLinkedin
                    className="cursor-pointer"
                    size={24}
                    onClick={() => handleOpenUrl("https://www.linkedin.com/in/fatihmuhamadridho/")}
                  />
                  <IconBrandInstagram
                    className="cursor-pointer"
                    size={24}
                    onClick={() => handleOpenUrl("https://www.instagram.com/fatihmuhamadridho/")}
                  />
                </Group>
              </Stack>
            </Flex>
          </Flex>
        </Center>
        <Center>
          <Flex py={20} w={"100%"} maw={630} gap={30} justify={"space-between"}>
            <Stack align="center">
              <Text fz={16} fw={500} color="#3D3D3D" align="center">
                2
              </Text>
              <Text fz={14} fw={500} color="#575757" align="center">
                Years of work experience
              </Text>
            </Stack>
            <Stack align="center">
              <Text fz={16} fw={500} color="#3D3D3D" align="center">
                1
              </Text>
              <Text fz={14} fw={500} color="#575757" align="center">
                Completed projects
              </Text>
            </Stack>
            <Stack align="center">
              <Text fz={16} fw={500} color="#3D3D3D" align="center">
                0
              </Text>
              <Text fz={14} fw={500} color="#575757" align="center">
                Satisfied customers
              </Text>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex w={"100%"} maw={630} justify={"space-between"} gap={14}>
            <a className="w-full" href={"./files/Fatih_Muhamad_Ridho-resume.pdf"} download>
              <UnstyledButton className="bg-[#FBD144] rounded-[10px]" py={14} w={"100%"}>
                <Flex align={"center"} justify="center" gap={4}>
                  <Text fz={12} fw={500} color="#3D3D3D">
                    Download CV
                  </Text>
                  <IconDownload size={14} />
                </Flex>
              </UnstyledButton>
            </a>
            <UnstyledButton
              className="bg-[#FFFFFF] rounded-[10px]"
              py={14}
              w={"100%"}
              onClick={() => handleOpenUrl("https://wa.me/+6282110797472")}
            >
              <Center>
                <Text fz={12} fw={500} color="#3D3D3D">
                  Contact me
                </Text>
              </Center>
            </UnstyledButton>
          </Flex>
        </Center>
        <Paper py={8} px={8} radius={10}>
          <Flex justify={"space-between"} gap={8}>
            <Text
              className="rounded-[10px] cursor-pointer transition-all"
              w={"100%"}
              py={14}
              fz={14}
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
              py={14}
              fz={14}
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
          <SimpleGrid className="transition-all" cols={1} spacing={32}>
            <PortofolioCard />
            <Skeleton w={"100%"} h={210} radius={16} />
            <Skeleton w={"100%"} h={210} radius={16} />
            <Skeleton w={"100%"} h={210} radius={16} />
            <Skeleton w={"100%"} h={210} radius={16} />
            <Skeleton w={"100%"} h={210} radius={16} />
          </SimpleGrid>
        )}
        {currentNav === 2 && (
          <SimpleGrid className="transition-all" cols={1} spacing={48}>
            <Stack spacing={24}>
              <Text fw={500} align="center">
                Frontend Developer
              </Text>
              <SimpleGrid className="justify-items-center" cols={2}>
                <Group w={"100%"} maw={110} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={16} />
                  <Stack spacing={0}>
                    <Text fz={14}>React Js</Text>
                    <Text fz={12}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={110} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={16} />
                  <Stack spacing={0}>
                    <Text fz={14}>Next Js</Text>
                    <Text fz={12}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={110} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={16} />
                  <Stack spacing={0}>
                    <Text fz={14}>TypeScript</Text>
                    <Text fz={12}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={110} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={16} />
                  <Stack spacing={0}>
                    <Text fz={14}>JavaScript</Text>
                    <Text fz={12}>Basic</Text>
                  </Stack>
                </Group>
              </SimpleGrid>
            </Stack>
            <Stack spacing={24}>
              <Text fw={500} align="center">
                Backend Developer
              </Text>
              <SimpleGrid className="justify-items-center" cols={2}>
                <Group w={"100%"} maw={110} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={16} />
                  <Stack spacing={0}>
                    <Text fz={14}>Node Js</Text>
                    <Text fz={12}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={110} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={16} />
                  <Stack spacing={0}>
                    <Text fz={14}>Express Js</Text>
                    <Text fz={12}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={110} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={16} />
                  <Stack spacing={0}>
                    <Text fz={14}>MySQL</Text>
                    <Text fz={12}>Basic</Text>
                  </Stack>
                </Group>
                <Group w={"100%"} maw={110} spacing={16}>
                  <IconCheck className="border-[1px] border-black rounded-full" size={16} />
                  <Stack spacing={0}>
                    <Text fz={14}>MongoDB</Text>
                    <Text fz={12}>Basic</Text>
                  </Stack>
                </Group>
              </SimpleGrid>
            </Stack>
          </SimpleGrid>
        )}
        <Text mt={60} fz={14} fw={500} align="center">
          ©Fatih Muhamad Ridho. 2023 All rigths reserved
        </Text>
      </Stack>
    </Default>
  );
};

export default HomePageMobile;
