import { Badge, Flex, Image, Paper, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import type { portofolioModelProps } from "@/pages/api/models/portofolioModel";

interface WorkCardProps extends portofolioModelProps {
  reverse?: boolean;
}

const IconOpen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 3H21V9"
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14L21 3"
      stroke="#4B5563"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WorkCard = (props: WorkCardProps) => {
  const { reverse, title, description, banner, skills } = props;

  return (
    <Paper bg={"#1F2937"}>
      <Flex w={"100%"} direction={reverse ? "row-reverse" : "row"}>
        <Flex w={"100%"} p={48}>
          <Image
            src={banner || "https://dummyimage.com/250/ffffff/000000"}
            alt="work-image"
            width={"100%"}
            height={384}
          />
        </Flex>
        <Flex w={"100%"} p={48} direction={"column"} gap={24}>
          <Text fz={20} fw={600} lh={"28px"} color="#F9FAFB">
            {title || "<title>"}
          </Text>
          <Text fz={16} fw={400} lh={"24px"} color="#D1D5DB">
            {description || "<description>"}
          </Text>
          <SimpleGrid cols={4}>
            {skills.map((skillData, skillIndex: number) => (
              <Badge
                className="capitalize"
                py={4}
                px={20}
                bg={"#374151"}
                fullWidth={true}
                key={skillIndex}
              >
                <Text fz={14} fw={500} lh={"20px"} color="#D1D5DB">
                  {skillData}
                </Text>
              </Badge>
            ))}
          </SimpleGrid>
          <IconOpen />
        </Flex>
      </Flex>
    </Paper>
  );
};

export default WorkCard;
