import {
  Badge,
  Center,
  CopyButton,
  Flex,
  Paper,
  Text,
  TypographyStylesProvider,
} from "@mantine/core";
import {
  IconBrandFigma,
  IconBrandGithub,
  IconBrandTwitter,
  IconCheck,
  IconCopy,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import React from "react";

const ContactSection = () => {
  return (
    <Paper py={96} px={80 + 32} bg={"#111827"}>
      <TypographyStylesProvider className="text-white">
        <Center p={0}>
          <Flex direction={"column"} align={"center"} maw={600} w={"100%"} gap={48}>
            <Badge w={"auto"} py={4} px={20} className="text-[#D1D5DB] normal-case" bg={"#374151"}>
              Get in touch
            </Badge>
            <Text fz={20} fw={400} lh={"28px"} color="#D1D5DB" ta={"center"}>
              What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer,
              have a query, or simply want to connect.
            </Text>
            <Flex direction={"column"} align={"center"} gap={16}>
              <CopyButton value="fatihmuhamadridho1@gmail.com">
                {({ copy, copied }) => (
                  <Flex
                    className={`cursor-pointer ${copied && "text-[#D1D5DB]"} active:text-[#D1D5DB]`}
                    align={"center"}
                    justify={"center"}
                    gap={20}
                    onClick={copy}
                  >
                    <IconMail size={32} />
                    <Text fz={36} fw={600} lh={"40px"}>
                      fatihmuhamadridho1@gmail.com
                    </Text>
                    {copied ? <IconCheck size={32} /> : <IconCopy size={32} />}
                  </Flex>
                )}
              </CopyButton>
              <CopyButton value="+6282110797472">
                {({ copy, copied }) => (
                  <Flex
                    className={`cursor-pointer ${copied && "text-[#D1D5DB]"} active:text-[#D1D5DB]`}
                    align={"center"}
                    gap={20}
                    onClick={copy}
                  >
                    <IconPhone size={32} />
                    <Text fz={36} fw={600} lh={"40px"}>
                      +62 82110797472
                    </Text>
                    {copied ? <IconCheck size={32} /> : <IconCopy size={32} />}
                  </Flex>
                )}
              </CopyButton>
            </Flex>
            <Flex direction={"column"} align={"center"} gap={8}>
              <Text fz={16} fw={400} lh={"24px"}>
                You may also find me on these platforms!
              </Text>
              <Flex>
                <IconBrandGithub className="p-[6px]" size={24 + 12} />
                <IconBrandTwitter className="p-[6px]" size={24 + 12} />
                <IconBrandFigma className="p-[6px]" size={24 + 12} />
              </Flex>
            </Flex>
          </Flex>
        </Center>
      </TypographyStylesProvider>
    </Paper>
  );
};

export default ContactSection;
