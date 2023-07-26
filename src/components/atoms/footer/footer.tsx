import { Flex, Text, TypographyStylesProvider } from "@mantine/core";
import { IconCopyright } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <TypographyStylesProvider className="text-white">
      <Flex py={24} px={80 + 32} align={"center"} justify={"center"} gap={8}>
        <IconCopyright size={24} />
        <Text fz={14} fw={400} lh={"20px"}>
          2023 | Designed and coded with ❤️️ by Sagar Shah
        </Text>
      </Flex>
    </TypographyStylesProvider>
  );
};

export default Footer;
