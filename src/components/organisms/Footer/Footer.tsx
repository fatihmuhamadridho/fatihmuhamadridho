import { Flex, Footer as FooterCore, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <FooterCore className="flex items-center justify-center" height={60}>
      <Flex maw={1024} px={12} w={"100%"} h={"100%"} align={"center"} justify={"space-between"}>
        <Text fz={14} fw={600}>
          Fatih Muhamad Ridho
        </Text>
        <Text fz={14}>Copyright © 2023 Fatih Muhamad Ridho. All rights reserved.</Text>
        <Flex gap={12}>
          <IconBrandGithub />
          <IconBrandLinkedin />
        </Flex>
      </Flex>
    </FooterCore>
  );
};

export default Footer;
