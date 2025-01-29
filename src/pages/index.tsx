import { Layout, ProfileSection } from '@/shared/components';
import { Box, Flex, Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { CONST_EXPERIENCES, CONST_PROJECTS } from '@/shared/constants';

const pageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const HomePage = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const sections = useMemo(
    () => [
      { ref: aboutRef, name: 'about' },
      { ref: experienceRef, name: 'experience' },
      { ref: projectRef, name: 'project' },
    ],
    [],
  );

  const scrollToSection = (sectionName: string) => {
    const section = sections.find((s) => s.name === sectionName);
    if (section?.ref.current) {
      const elementPosition = section.ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 96;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((section) => section.ref.current === entry.target);
            if (section) {
              setActiveSection(section.name);
            }
          }
        });
      },
      { threshold: 0.3 },
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
      <motion.div initial="hidden" animate="visible" exit="exit" variants={pageVariants} transition={{ duration: 0.5, ease: 'easeInOut' }}>
        <Flex gap={16} direction={{ base: 'column', lg: 'row' }}>
          <ProfileSection activeSection={activeSection} scrollToSection={scrollToSection} />
          <Stack className="pt-[30px] pb-[96px] w-full lg:w-1/2 lg:py-[96px]">
            <section ref={aboutRef} className="mb-[144px]">
              <Text>
                I’m a Frontend Developer passionate about creating responsive and dynamic applications that provide seamless user experiences. With
                expertise in modern technologies like React.js, Next.js, and React Native, I enjoy building digital solutions that combine thoughtful
                design with robust functionality. My commitment to clean and maintainable code ensures every project is both scalable and
                high-performing.
                <br />
                <br />
                Throughout my career, I have worked on diverse projects ranging from mobile applications to content management systems and marketplace
                platforms. Collaborating with cross-functional teams, I’ve delivered innovative features that meet user needs while adhering to
                industry best practices. My experience includes integrating REST APIs, implementing clean architecture principles, and optimizing
                application performance for both web and mobile environments.
                <br />
                <br />
                I take pride in continuously developing my skills through certifications and practical projects. By staying up-to-date with the latest
                technologies, I ensure that my work reflects modern development standards and trends. My expertise spans not only technical
                implementation but also effective collaboration and problem-solving, which are crucial for delivering impactful results.
                <br />
                <br />
                In my free time, I enjoy exploring new technologies and contributing to open-source projects. I strive to create digital experiences
                that are both functional and meaningful for users.
              </Text>
            </section>
            <section ref={experienceRef} className="mb-[144px]">
              {CONST_EXPERIENCES.map((item, index) => (
                <Box key={index} className="relative mb-[48px] py-2 px-2 grid grid-cols-8 gap-4 cursor-pointer group">
                  <Box className="absolute block -inset-x-4 -inset-y-4 z-0 rounded-md group-hover:drop-shadow-lg group-hover:bg-[#1e293b80]"></Box>
                  <Text className="col-span-2 !text-xs z-10" fw={500}>
                    {item.from} - {item.to}
                  </Text>
                  <Stack className="col-span-6 z-10" gap={12}>
                    <Text className="!leading-tight">
                      {item.role} - {item.company}
                    </Text>
                    <Text className="!text-ui-secondary" fz={14}>
                      {item.description}
                    </Text>
                    <Group>
                      {item.tools.map((badge) => (
                        <Box key={badge} className="text-[#5eead4] bg-[#2dd4bf1a] rounded-full" py={2} px={12} fz={12}>
                          {badge}
                        </Box>
                      ))}
                    </Group>
                  </Stack>
                </Box>
              ))}
              <Link href={'/Fatih Muhamad Ridho-resume.pdf'} target="__blank">
                <Box className="cursor-pointer hover:text-[#5eead4]">View Full Resume</Box>
              </Link>
            </section>
            <section ref={projectRef} className="mb-[144px]">
              {CONST_PROJECTS.filter((data) => data.isFavorite)
                .slice(0, 4)
                .map((item, index) => {
                  if (index < 4 && item.isFavorite)
                    return (
                      <Box key={index} className="relative mb-[48px] py-2 px-2 grid grid-cols-8 gap-4 cursor-pointer group">
                        <Box className="absolute block -inset-x-4 -inset-y-4 z-0 rounded-md group-hover:drop-shadow-lg group-hover:bg-[#1e293b80]"></Box>
                        <Image className="col-span-2 z-10 rounded" src={item.image} alt={item.project} width={200} height={48} loading="lazy" />
                        <Stack className="col-span-6 z-10" gap={12}>
                          <Text className="!leading-tight">
                            {item.role} - {item.madeAt}
                          </Text>
                          <Text className="!text-ui-secondary" fz={14}>
                            {item.description}
                          </Text>
                          <Group>
                            {item.buildWith.map((badge) => (
                              <Box key={badge} className="text-[#5eead4] bg-[#2dd4bf1a] rounded-full" py={2} px={12} fz={12}>
                                {badge}
                              </Box>
                            ))}
                          </Group>
                        </Stack>
                      </Box>
                    );
                  return null;
                })}
              <Link href={'/archive'}>
                <Box className="cursor-pointer hover:text-[#5eead4]">View Full Project Archive</Box>
              </Link>
            </section>
            <section>
              <Text className="!text-ui-secondary" fz={14} maw={{ lg: 448 }}>
                Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
                All text is set in the Inter typeface.
              </Text>
            </section>
          </Stack>
        </Flex>
      </motion.div>
    </Layout>
  );
};

export default HomePage;
