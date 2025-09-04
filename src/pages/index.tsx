import { Layout, ProfileSection } from '@/shared/components';
import { Box, Flex, Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { CONST_EXPERIENCES, CONST_PROJECTS } from '@/shared/constants';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { useUserProfile } from '@/hooks/user.hook';
import { CONST_PROFILE_USERNAME } from '@/configs/base.config';

const pageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
      locale: locale,
    },
  };
}

const HomePage = (props: any) => {
  const { locale = 'id' } = props;
  const tResume = useTranslations('resume');
  const tProject = useTranslations('project');
  const tFooter = useTranslations('footer');
  const [activeSection, setActiveSection] = useState<string>('about');
  const { data: profileData } = useUserProfile({ u: CONST_PROFILE_USERNAME });
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
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Flex gap={16} direction={{ base: 'column', lg: 'row' }}>
          <ProfileSection
            activeSection={activeSection}
            scrollToSection={scrollToSection}
            profileData={profileData}
            locale={locale}
          />
          <Stack className="pt-[30px] pb-[96px] w-full lg:w-1/2 lg:py-[96px]">
            <section ref={aboutRef} className="mb-[144px]">
              <div
                dangerouslySetInnerHTML={{
                  __html: profileData?.detail.long_description[locale] || '',
                }}
              />
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
                <Box className="cursor-pointer hover:text-[#5eead4]">{tResume('button')}</Box>
              </Link>
            </section>
            <section ref={projectRef} className="mb-[144px]">
              {CONST_PROJECTS.filter((data) => data.isFavorite)
                .slice(0, 4)
                .map((item, index) => {
                  if (index < 4 && item.isFavorite)
                    return (
                      <Box
                        key={index}
                        className="relative mb-[48px] py-2 px-2 grid grid-cols-8 gap-4 cursor-pointer group"
                      >
                        <Box className="absolute block -inset-x-4 -inset-y-4 z-0 rounded-md group-hover:drop-shadow-lg group-hover:bg-[#1e293b80]"></Box>
                        <Image
                          className="col-span-2 z-10 rounded"
                          src={item.image}
                          alt={item.project}
                          width={200}
                          height={48}
                          loading="lazy"
                        />
                        <Stack className="col-span-6 z-10" gap={12}>
                          <Text className="!leading-tight">
                            {item.role} - {item.madeAt}
                          </Text>
                          <Text className="!text-ui-secondary" fz={14}>
                            {item.description}
                          </Text>
                          <Group>
                            {item.buildWith.map((badge) => (
                              <Box
                                key={badge}
                                className="text-[#5eead4] bg-[#2dd4bf1a] rounded-full"
                                py={2}
                                px={12}
                                fz={12}
                              >
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
                <Box className="cursor-pointer hover:text-[#5eead4]">{tProject('button')}</Box>
              </Link>
            </section>
            <section>
              <Text className="!text-ui-secondary" fz={14} maw={{ lg: 448 }}>
                {tFooter('description')}
              </Text>
            </section>
          </Stack>
        </Flex>
      </motion.div>
    </Layout>
  );
};

export default HomePage;
