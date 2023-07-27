import { Badge, Center, Flex, Text } from "@mantine/core";
import React from "react";
import WorkCard from "../cards/work-card";

const WorkSection = () => {
  return (
    <Flex direction={"column"} py={96} px={80 + 32} gap={48}>
      <Center className="flex-col gap-4">
        <Badge>work</Badge>
        <Text>Some of the noteworthy projects I have built:</Text>
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </Center>
    </Flex>
  );
};

export default WorkSection;