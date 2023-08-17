import { Footer as FooterCore, Container, Center, Flex, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <Container fluid p={16}>
      <Flex align={"center"} justify={"space-between"}>
        <Text>fatihmuhamadridho</Text>
        <Flex gap={16}>
          <Text>+62 82110797472</Text>
          {/* <Text>fatihmuhamadridho1@gmail.com</Text> */}
          <Flex gap={12}>
            <IconBrandGithub />
            <IconBrandTwitter />
            <IconBrandLinkedin />
          </Flex>
        </Flex>
      </Flex>
      <FooterCore height={60}>
        <Center w={"100%"} h={"100%"}>
          <Flex>
            <Flex>
              <Text>About Me</Text>
              <Text>About Me</Text>
              <Text>About Me</Text>
              <Text>About Me</Text>
              <Text>About Me</Text>
            </Flex>
          </Flex>
        </Center>
      </FooterCore>
    </Container>
  );
};

export default Footer;
