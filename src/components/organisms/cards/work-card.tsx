import { Flex, Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import type { portofolioModelProps } from "@/pages/api/models/portofolioModel";

interface WorkCardProps extends portofolioModelProps {
  reverse?: boolean;
}

const WorkCard = (props: WorkCardProps) => {
  const { reverse, title, description, banner, skills } = props;

  return (
    <Flex w={"100%"} direction={reverse ? "row-reverse" : "row"}>
      <Flex w={"100%"} p={48}>
        <Image
          src={banner || "https://dummyimage.com/250/ffffff/000000"}
          alt="work-image"
          width={"auto"}
          height={384}
        />
      </Flex>
      <Flex w={"100%"} p={48} direction={"column"} gap={24}>
        <Text>{title || "<title>"}</Text>
        <Text>{description || "<description>"}</Text>
        <SimpleGrid cols={10}>
          {skills.map((skillData, skillIndex: number) => (
            <Text key={skillIndex}>{skillData}</Text>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default WorkCard;
