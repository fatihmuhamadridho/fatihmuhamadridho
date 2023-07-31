import { Badge, Center, Flex, Paper, Skeleton, Text } from "@mantine/core";
import React from "react";

const AboutSection = () => {
  return (
    <Paper bg={"#111827"}>
      <Flex direction={"column"} py={96} px={80 + 32} gap={48}>
        <Center>
          <Badge py={4} px={20} className="text-[#D1D5DB] normal-case" bg={"#374151"}>
            About me
          </Badge>
        </Center>
        <Flex>
          <Flex w={"100%"} maw={584} direction={"column"}>
            <Skeleton width={"100%"} maw={400} height={320} />
          </Flex>
          <Flex direction={"column"} w={"100%"} gap={24}>
            <Text fz={30} fw={600} lh={"36px"} color="#F9FAFB">
              Curious about me? Here you have it:
            </Text>
            <Text fz={16} fw={400} lh={"24px"} color="#D1D5DB" ta={"justify"}>
              I&apos;m a passionate, self-proclaimed designer who specializes in full stack
              development (React.js & Node.js). I am very enthusiastic about bringing the technical
              and visual aspects of digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Paper>
  );
};

export default AboutSection;
