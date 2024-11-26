import { Layout, ProfileSection } from "@/components";
import { Box, Flex, Group, Stack, Text } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const sections = useMemo(
    () => [
      { ref: aboutRef, name: "about" },
      { ref: experienceRef, name: "experience" },
      { ref: projectRef, name: "project" },
    ],
    []
  );

  const scrollToSection = (sectionName: string) => {
    const section = sections.find((s) => s.name === sectionName);
    if (section?.ref.current) {
      const elementPosition =
        section.ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 96;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setActiveSection(section.name);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });
    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]);

  return (
    <Layout title="Fatih Muhamad Ridho">
      <Flex gap={16}>
        <ProfileSection
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <Stack className="py-[96px] w-1/2">
          <section ref={aboutRef} className="mb-[144px]">
            <Text>
              I’m a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.
              <br />
              <br />
              Currently, I&apos;m a Senior Front-End Engineer at Klaviyo,
              specializing in accessibility. I contribute to the creation and
              maintenance of UI components that power Klaviyo’s frontend,
              ensuring our platform meets web accessibility standards and best
              practices to deliver an inclusive user experience.
              <br />
              <br />
              In the past, I&apos;ve had the opportunity to develop software
              across a variety of settings — from advertising agencies and large
              corporations to start-ups and small digital product studios.
              Additionally, I also released a comprehensive video course a few
              years ago, guiding learners through building a web app with the
              Spotify API.
              <br />
              <br />
              In my spare time, I’m usually climbing, reading, hanging out with
              my wife and two cats, or running around Hyrule searching for Korok
              seeds K o r o k s e e d s .
            </Text>
          </section>
          <section ref={experienceRef} className="mb-[144px]">
            {[1, 2, 3, 4, 5].map((item) => (
              <Box
                key={item}
                className="relative mb-[48px] py-2 px-2 grid grid-cols-8 gap-4 cursor-pointer group"
              >
                <Box className="absolute block -inset-x-4 -inset-y-4 z-0 rounded-md group-hover:drop-shadow-lg group-hover:bg-[#1e293b80]"></Box>
                <Text className="col-span-2 !text-xs z-10" fw={500}>
                  2024 - PRESENT
                </Text>
                <Stack className="col-span-6 z-10" gap={12}>
                  <Text className="!leading-tight">
                    Frontend Engineer - CIMB Niaga
                  </Text>
                  <Text className="!text-ui-secondary" fz={14}>
                    In the past, I&apos;ve had the opportunity to develop
                    software across a variety of settings — from advertising
                    agencies and large corporations to start-ups and small
                    digital product studios. Additionally, I also released a
                    comprehensive video course a few years ago, guiding learners
                    through building a web app with the Spotify API.
                  </Text>
                  <Group>
                    {[1, 2, 3, 4].map((badge) => (
                      <Box
                        key={badge}
                        className="text-[#5eead4] bg-[#2dd4bf1a] rounded-full"
                        py={2}
                        px={12}
                        fz={12}
                      >
                        JavaScript
                      </Box>
                    ))}
                  </Group>
                </Stack>
              </Box>
            ))}
            <Link href={"/resume.pdf"} target="__blank">
              <Box className="cursor-pointer hover:text-[#5eead4]">
                View Full Resume
              </Box>
            </Link>
          </section>
          <section ref={projectRef} className="mb-[144px]">
            <Text>
              I’m a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.
              Currently, I&apos;m a Senior Front-End Engineer at Klaviyo,
              specializing in accessibility. I contribute to the creation and
              maintenance of UI components that power Klaviyo’s frontend,
              ensuring our platform meets web accessibility standards and best
              practices to deliver an inclusive user experience. In the past,
              I&apos;ve had the opportunity to develop software across a variety
              of settings — from advertising agencies and large corporations to
              start-ups and small digital product studios. Additionally, I also
              released a comprehensive video course a few years ago, guiding
              learners through building a web app with the Spotify API. In my
              spare time, I’m usually climbing, reading, hanging out with my
              wife and two cats, or running around Hyrule searching for Korok
              seeds K o r o k s e e d s .
            </Text>
          </section>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default HomePage;
