import React from "react";
import { Divider, Flex, Text, TypographyStylesProvider, UnstyledButton } from "@mantine/core";
import { IconMoonStars } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <Flex direction={"column"} p={16} px={80}>
      <Flex justify={"space-between"} px={32}>
        <Text
          className="cursor-pointer"
          fz={30}
          fw={700}
          lh={"36px"}
          color="#F9FAFB"
        >{`<SS />`}</Text>
        <TypographyStylesProvider className="text-white" fw={500} lh={"24px"}>
          <Flex gap={24} align={"center"}>
            <Text className="cursor-pointer">About</Text>
            <Text className="cursor-pointer">Work</Text>
            <Text className="cursor-pointer">Testimonials</Text>
            <Text className="cursor-pointer">Contact</Text>
            <Divider orientation="vertical" />
            <Flex gap={16} align={"center"}>
              <IconMoonStars className="cursor-pointer" size={24} />
              <UnstyledButton
                py={6}
                px={16}
                className="text-black bg-white rounded-[12px] active:bg-black active:text-white"
              >
                Download CV
              </UnstyledButton>
            </Flex>
          </Flex>
        </TypographyStylesProvider>
      </Flex>
    </Flex>
  );
};

export default Navbar;
