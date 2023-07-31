import { Badge, Center, Flex, Paper, SimpleGrid, Text } from "@mantine/core";
import { IconBrandJavascript } from "@tabler/icons-react";
import React from "react";

const SkillCard = () => {
  return (
    <Flex direction={"column"} align={"center"} justify={"center"} gap={8}>
      <IconBrandJavascript size={64} color="white" />
      <Text fz={18} fw={400} lh={"28px"} color="#D1D5DB">
        Javascript
      </Text>
    </Flex>
  );
};

const SkillSection = () => {
  return (
    <Flex direction={"column"} py={96} px={80 + 32} gap={48}>
      <Center className="flex flex-col gap-4">
        <Badge w={"auto"} py={4} px={20} className="text-[#D1D5DB] normal-case" bg={"#374151"}>
          Skills
        </Badge>
        <Text fz={20} fw={400} lh={"28px"} color="#D1D5DB">
          The skills, tools and technologies I am really good at:
        </Text>
      </Center>
      <SimpleGrid cols={8} verticalSpacing={48}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (dummyData: any, dummyIndex: number) => (
            <SkillCard key={dummyIndex} />
          )
        )}
        <SkillCard />
      </SimpleGrid>
    </Flex>
  );
};

export default SkillSection;
