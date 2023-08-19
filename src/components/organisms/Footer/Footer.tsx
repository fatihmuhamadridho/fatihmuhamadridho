import { Footer as FooterCore, Container, Center, Flex, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import React from "react";
import Logo from "../../../../public/images/logo.svg";

const Footer = () => {
  return (
    <Container fluid p={0}>
      <Flex py={16} w={"100%"} justify={"center"}>
        <Flex w={"100%"} maw={940} align={"center"} justify={"space-between"}>
          <Flex className="cursor-pointer" gap={4} align={"center"}>
            <Logo width={40} height={"100%"} />
            <Text>fatihmuhamadridho</Text>
          </Flex>
          <Flex gap={12}>
            <IconBrandGithub />
            <IconBrandTwitter />
            <IconBrandLinkedin />
          </Flex>
        </Flex>
      </Flex>
      <FooterCore height={60}>
        <Flex w={"100%"} h={"100%"} justify={"center"}>
          <Flex w={"100%"} maw={940} h={"100%"} align={"center"} justify={"space-between"}>
            <Flex gap={16}>
              <Text>About Me</Text>
              <Text>My Tech Stack</Text>
              <Text>Portofolio</Text>
              <Text>Contact Me</Text>
            </Flex>
            <Text>Design and build by Fatih Muhamad Ridho</Text>
          </Flex>
        </Flex>
      </FooterCore>
    </Container>
  );
};

export default Footer;
