import { Badge, Center, Flex, Text } from "@mantine/core";
import React from "react";
import WorkCard from "../cards/work-card";
import { useGetAllPortofolio } from "@/services/portofolioService";

const WorkSection = () => {
  const { data: portofolioData }: { data: any[] } = useGetAllPortofolio();

  return (
    <Flex direction={"column"} py={96} px={80 + 32} gap={48}>
      <Center className="flex-col gap-4">
        <Badge>work</Badge>
        <Text>Some of the noteworthy projects I have built:</Text>
        {portofolioData?.map((portoData: any, portoIndex: number) => (
          <WorkCard
            key={portoIndex}
            reverse={portoIndex % 2 === 1 ? true : false}
            title={portoData.title}
            description={portoData.description}
            banner={portoData.banner}
          />
        ))}
      </Center>
    </Flex>
  );
};

export default WorkSection;
