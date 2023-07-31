import { Badge, Center, Flex, Text } from "@mantine/core";
import React from "react";
import WorkCard from "../cards/work-card";
import { useGetAllPortofolio } from "@/services/portofolioService";
import type { portofolioModelProps } from "@/pages/api/models/portofolioModel";

const WorkSection = () => {
  const { data: portofolioData }: { data: Array<portofolioModelProps> } = useGetAllPortofolio();

  return (
    <Flex direction={"column"} py={96} px={80 + 32} gap={48}>
      <Center className="flex-col gap-4">
        <Badge w={"auto"} py={4} px={20} className="text-[#D1D5DB] normal-case" bg={"#374151"}>
          Work
        </Badge>
        <Text fz={20} fw={400} lh={"28px"} color="#D1D5DB">
          Some of the noteworthy projects I have built:
        </Text>
        {portofolioData?.map((portoData, portoIndex: number) => (
          <WorkCard
            key={portoIndex}
            reverse={portoIndex % 2 === 1 ? true : false}
            title={portoData.title}
            description={portoData.description}
            banner={portoData.banner}
            skills={portoData.skills}
          />
        ))}
      </Center>
    </Flex>
  );
};

export default WorkSection;
