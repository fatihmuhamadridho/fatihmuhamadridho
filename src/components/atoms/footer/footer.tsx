import { Flex, Paper, Text, TypographyStylesProvider } from "@mantine/core";
import { IconCopyright } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <Paper bg={"#030712" || "#111827"}>
      <Flex py={24} px={80 + 32} align={"center"} justify={"center"} gap={4}>
        <IconCopyright size={16} color="#D1D5DB" />
        <Text fz={14} fw={400} lh={"20px"} color="#D1D5DB">
          copyright Fatih Muhamad Ridho {currentYear}
        </Text>
      </Flex>
    </Paper>
  );
};

export default Footer;
