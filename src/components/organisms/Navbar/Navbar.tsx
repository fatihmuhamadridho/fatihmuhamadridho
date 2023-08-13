import { Flex, Header, Text, UnstyledButton } from "@mantine/core";
import React from "react";

const Navbar = () => {
  return (
    <Header className="sticky flex items-center justify-center" height={60}>
      <Flex maw={1024} px={12} w={"100%"} h={"100%"} align={"center"} justify={"space-between"}>
        <Text>Fatih Muhamad Ridho</Text>
        <UnstyledButton className="bg-[#F1F1F1] rounded-[8px]" py={8} px={12}>
          Download CV
        </UnstyledButton>
      </Flex>
    </Header>
  );
};

export default Navbar;
