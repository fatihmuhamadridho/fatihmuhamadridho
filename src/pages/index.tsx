import Default from "@/components/templates/Default2/Default";
import {
  Button,
  Card,
  Center,
  Container,
  Flex,
  List,
  Paper,
  ScrollArea,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  clsx,
} from "@mantine/core";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import styles from "./homepage.module.css";
import { IconBrandTypescript, IconMapPinPin } from "@tabler/icons-react";

const WorkCard = () => {
  return (
    <Card shadow="sm" p={0} radius={8} bg={"#ECEFF1"}>
      <Card.Section>
        <Skeleton width={"100%"} height={400} />
      </Card.Section>
      <Paper p={24}>
        <Stack>
          <Stack spacing={0}>
            <Text fz={18} fw={600}>
              PT. Telekomunikasi Indonesia (Telkom)
            </Text>
            <Text fw={500}>Frontend Web Developer - Contract</Text>
            <Text>Aug 2022 - Jul 2023</Text>
          </Stack>
          <List className="list-disc" pr={22}>
            <List.Item>Create CMS</List.Item>
            <List.Item>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, consequuntur.
            </List.Item>
            <List.Item>Create CMS</List.Item>
          </List>
        </Stack>
      </Paper>
    </Card>
  );
};

const PortofolioCard = () => {
  return (
    <Card py={24} px={32} radius={8} bg={"#ECEFF1"}>
      <Flex align={"center"} justify={"space-between"} gap={32}>
        <Stack>
          <Stack spacing={0}>
            <Text fz={36} fw={600}>
              Portofolio Website
            </Text>
            <Text fw={14}>Frontend Engineer - 2023</Text>
          </Stack>
          <Text fw={14}>Improving a key element in the job seeker experience</Text>
          <Flex gap={16}>
            <Button variant="default">Submit</Button>
            <Button variant="default">Submit</Button>
          </Flex>
        </Stack>
        <Card.Section>
          <Skeleton width={400} height={300} />
        </Card.Section>
      </Flex>
    </Card>
  );
};

const HomePage = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [currentScroll, setCurrentScroll] = useState<any>(0);

  useMotionValueEvent(scrollY, "change", latest => {
    setCurrentScroll(latest);
  });

  return (
    <Default title="Fatih Muhamad Ridho">
      <Container className="relative" mih={700} fluid p={0}>
        <Container className="absolute overflow-hidden" w={"100%"} h={"100%"} fluid p={0}>
          <motion.div
            className={clsx(styles.wrapper, "-z-[75] w-[980px] h-[700px] absolute top-[258px]")}
            style={{
              scaleX: 1.5 + scrollYProgress.get() * 5,
              scaleY: 1.5 + scrollYProgress.get() * 5,
              y: 0 + scrollYProgress.get() * 1500,
              opacity: 1 - scrollYProgress.get() * 4,
            }}
          >
            <motion.div
              className={clsx(
                styles.motion,
                styles.particle1,
                "text-lg font-normal leading-[140%] box-border w-5 h-5 opacity-40 !bg-[#323235] absolute rounded-md right-[159px] top-[90px]"
              )}
              style={{
                rotateZ: 100,
              }}
            ></motion.div>
            <motion.div
              className={clsx(
                styles.motion,
                styles.particle2,
                "text-[#323235] text-lg font-normal leading-[140%] box-border w-6 h-6 opacity-30 !bg-[#323235] absolute rounded-md right-[600px] top-[200px]"
              )}
              animate={{}}
            ></motion.div>
            <motion.div
              className={clsx(
                styles.motion,
                styles.particle3,
                "text-[#323235] text-lg font-normal leading-[140%] box-border w-[9px] h-[9px] opacity-40 !bg-[#323235] absolute rounded-sm right-[624px] top-[94px]"
              )}
              animate={{}}
            ></motion.div>
            <motion.div
              className={clsx(
                styles.motion,
                styles.particle4,
                "text-[#323235] text-lg font-normal leading-[140%] box-border w-[15px] h-[15px] opacity-20 !bg-black absolute rounded-[5px] right-[428px] top-16"
              )}
              animate={{}}
            ></motion.div>
            <motion.div
              className={clsx(
                styles.motion,
                styles.particle5,
                "text-[#323235] text-lg font-normal leading-[140%] box-border w-3 h-3 opacity-20 !bg-[#323235] rounded absolute right-[448px] top-[203px]"
              )}
              animate={{}}
            ></motion.div>
            <motion.div
              className={clsx(
                styles.motion,
                styles.particle6,
                "text-[#323235] text-lg font-normal leading-[140%] box-border w-3 h-3 opacity-20 !bg-[#323235] rounded absolute right-[262px] top-[251px]"
              )}
              animate={{}}
            ></motion.div>
            <motion.div
              className={clsx(
                styles.motion,
                styles.particle7,
                "text-[#323235] text-lg font-normal leading-[140%] box-border w-[9px] h-[9px] opacity-20 !bg-[#323235] absolute rounded-sm right-[104px] top-[213px]"
              )}
              animate={{}}
            ></motion.div>
            <motion.div
              className={clsx(
                styles.motion,
                styles.particle8,
                "text-[#323235] text-lg font-normal leading-[140%] box-border w-[11px] h-[11px] opacity-[0.15] !bg-[#323235] absolute rounded-[3px] right-16 top-[111px]"
              )}
              animate={{}}
            ></motion.div>
          </motion.div>
        </Container>

        <Center pb={100} h={700}>
          <Flex maw={500} direction={"column"} align={"center"} gap={12}>
            <Text fz={56} fw={700}>
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
      <Container maw={1024} fluid p={0}>
        <Container mih={800} fluid p={0}>
          <Stack p={32} spacing={32}>
            <Text fz={56} fw={600} align="center">
              Works
            </Text>
            <SimpleGrid cols={2}>
              <WorkCard />
              <WorkCard />
              <WorkCard />
              <WorkCard />
            </SimpleGrid>
          </Stack>
        </Container>
        <Container fluid p={0}>
          <Stack p={32} spacing={32}>
            <Text fz={56} fw={600} align="center">
              Skills
            </Text>
            <ScrollArea>
              <Flex>
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
                <IconBrandTypescript size={75} />
              </Flex>
            </ScrollArea>
          </Stack>
        </Container>
        <Container fluid p={0}>
          <Stack p={32} spacing={32}>
            <Text fz={56} fw={600} align="center">
              Portofolio
            </Text>
            <PortofolioCard />
            <PortofolioCard />
            <PortofolioCard />
            <Text fz={18} fw={500} align="center">
              Explore More
            </Text>
          </Stack>
        </Container>
      </Container>
    </Default>
  );
};

export default HomePage;
