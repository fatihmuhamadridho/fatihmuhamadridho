import { Burger, Center, Flex, Header, MediaQuery, Text } from "@mantine/core";
import React from "react";
import Logo from "../../../../public/images/logo.svg";
import { useDisclosure } from "@mantine/hooks";

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Header className="sticky" height={60}>
      <Center px={16} w={"100%"} h={"100%"}>
        <MediaQuery smallerThan={600} styles={{ display: "none " }}>
          <Flex w={"100%"} maw={940} align={"center"} justify={"space-between"}>
            <Flex className="cursor-pointer" gap={4} align={"center"}>
              <Logo width={40} height={"100%"} />
              <Text>fatihmuhamadridho</Text>
            </Flex>
            <Flex gap={24}>
              <Text className="cursor-pointer" fz={14}>
                About Me
              </Text>
              <Text className="cursor-pointer" fz={14}>
                My Tech Stack
              </Text>
              <Text className="cursor-pointer" fz={14}>
                Portofolio
              </Text>
              <Text className="cursor-pointer" fz={14}>
                Contact Me
              </Text>
            </Flex>
          </Flex>
        </MediaQuery>

        <MediaQuery largerThan={600} styles={{ display: "none" }}>
          <Flex w={"100%"} maw={940} align={"center"} justify={"space-between"}>
            <Flex gap={4} align={"center"}>
              <Logo width={40} height={"100%"} />
              <Text>fatihmuhamadridho</Text>
            </Flex>
            <Burger opened={opened} onClick={toggle} />
          </Flex>
        </MediaQuery>
      </Center>
    </Header>
  );
};

export default Navbar;
