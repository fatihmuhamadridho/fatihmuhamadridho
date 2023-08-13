import { Divider, Flex, Header, Paper, Text, UnstyledButton } from "@mantine/core";
import React from "react";

const Navbar = () => {
  return (
    <Header
      className="sticky flex items-center justify-center"
      height={60}
      bg={"none"}
      withBorder={false}
    >
      <Flex
        className="!bg-none"
        maw={1024}
        px={12}
        w={"100%"}
        h={"100%"}
        align={"center"}
        justify={"space-between"}
      >
        <Paper py={8} px={12} radius={8}>
          <Text>Fatih Muhamad Ridho</Text>
        </Paper>
        <Paper py={8} px={12} radius={8}>
          <Flex align={"center"} gap={16}>
            <Text className="cursor-pointer">Works</Text>
            <Divider orientation="vertical" />
            <Text className="cursor-pointer">Portofolio</Text>
          </Flex>
        </Paper>
        <UnstyledButton className="bg-white rounded-[8px]" py={8} px={12}>
          Download CV
        </UnstyledButton>
      </Flex>
    </Header>
  );
};

export default Navbar;
