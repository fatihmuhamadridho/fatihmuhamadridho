import { Flex, Image, Text } from "@mantine/core";
import React from "react";

type WorkCardProps = {
  reverse?: boolean,
  title?: string | any;
  description?: string | any;
  banner?: string | any;
}

const WorkCard = (props: WorkCardProps) => {
  const { reverse, title, description, banner } = props;

  return (
    <Flex direction={reverse ? "row-reverse" : "row"}>
      <Image src={banner || "https://dummyimage.com/250/ffffff/000000"} alt="work-image" />
      <div>
        <Text>{title || "<title>"}</Text>
        <Text>{description || "<description>"}</Text>
      </div>
    </Flex>
  );
};

export default WorkCard;
