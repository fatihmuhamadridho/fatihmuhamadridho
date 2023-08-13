import Default from "@/components/templates/Default2/Default";
import { Center, Container, Flex, Text, clsx } from "@mantine/core";
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import { IconMap, IconMapPin, IconMapPinPin } from "@tabler/icons-react";

const HomePage = () => {
  const { scrollY } = useScroll();
  const [currentScroll, setCurrentScroll] = useState<any>(0);

  useMotionValueEvent(scrollY, "change", latest => {
    setCurrentScroll(latest);
  });

  console.log({ currentScroll, opacity: 1 - currentScroll / 500, y: currentScroll / 2 });

  return (
    <Default>
      <Container mih={700} fluid p={0}>
        <motion.div
          className={clsx(
            styles.wrapper,
            "-z-[75] max-w-[1024px] max-h-[700px] max w-[800px] h-[700px] absolute top-[358px]"
          )}
          animate={{
            scaleX: currentScroll < 600 ? 1.5 + Number((83 / 100000) * currentScroll) : 2,
            scaleY: currentScroll < 600 ? 1.5 + Number((83 / 100000) * currentScroll) : 2,
            // scaleX: 2,
            // scaleY: 2,
            scaleZ: 1,
            y: 0 + currentScroll / 5,
            opacity: currentScroll < 500 ? 1 - currentScroll / 500 : 0,
          }}
        >
          <motion.div
            className={clsx(
              styles.motion,
              styles.particle1,
              "text-lg font-normal leading-[140%] box-border w-5 h-5 opacity-40 !bg-[#323235] absolute rounded-md right-[159px] top-[90px]"
            )}
            animate={{
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
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
        <Center h={700}>
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
      <Container mih={800} fluid p={0}>
        <Text fz={56} fw={600} align="center">
          Works
        </Text>
      </Container>
    </Default>
  );
};

export default HomePage;
