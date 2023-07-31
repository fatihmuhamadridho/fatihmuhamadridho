import React from "react";
import { Divider, Flex, Text, TypographyStylesProvider, UnstyledButton } from "@mantine/core";
import { IconMoonStars } from "@tabler/icons-react";
import { useSectionContext } from "@/contexts/section/SectionContext";

const Navbar = () => {
  const { sections } = useSectionContext();

  return (
    <Flex className="sticky top-0 bg-black z-50" direction={"column"} p={16} px={80}>
      <Flex justify={"space-between"} px={32}>
        <Text
          className="cursor-pointer"
          fz={30}
          fw={700}
          lh={"36px"}
          color="#F9FAFB"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        >{`<SS />`}</Text>
        <TypographyStylesProvider className="text-white" fw={500} lh={"24px"}>
          <Flex gap={24} align={"center"}>
            <Text className="cursor-pointer" onClick={() => sections.scrollIntoAbout()}>
              About
            </Text>
            <Text className="cursor-pointer" onClick={() => sections.scrollIntoExperience()}>
              Experience
            </Text>
            <Text className="cursor-pointer" onClick={() => sections.scrollIntoWork()}>
              Work
            </Text>
            <Text className="cursor-pointer" onClick={() => sections.scrollIntoContact()}>
              Contact
            </Text>
            <Divider orientation="vertical" />
            <Flex gap={16} align={"center"}>
              {/* <IconMoonStars className="cursor-pointer" size={24} /> */}
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
