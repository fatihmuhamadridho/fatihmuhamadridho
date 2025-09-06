import { Layout, ProfileSection } from '@/shared/components';
import { Box, Flex, Group, Skeleton, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { useProfileUser } from '@/hooks/user.hook';
import { APP_VERSION, CONST_PROFILE_USERNAME } from '@/configs/base.config';
import { NextSeo } from 'next-seo';
import { Experience } from '@/core/domains/models/experience.model';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { UserFEController } from '@/core/domains/controllers/user.fe.controller';

const pageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const queryClient = new QueryClient();
  const userFEController = new UserFEController();

  await queryClient.prefetchQuery({
    queryKey: ['profile', { u: CONST_PROFILE_USERNAME }],
    queryFn: async () => {
      const data = await userFEController.getProfileUser({ u: CONST_PROFILE_USERNAME });
      return JSON.parse(JSON.stringify(data));
    },
  });

  return {
    props: {
      messages: (await import(`@/locales/${locale}.json`)).default,
      locale: locale,
      // dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}

const HomePage = (props: any) => {
  const { locale = 'id' } = props;
  const tResume = useTranslations('resume');
  const tProject = useTranslations('project');
  const tFooter = useTranslations('footer');
  const { data: profileData, isLoading } = useProfileUser({ u: CONST_PROFILE_USERNAME });
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

  const isPresentLocale = (locale: 'id' | 'en') => {
    if (locale === 'en') {
      return 'PRESENT';
    } else {
      return 'SEKARANG';
    }
  };

  return (
    <Layout>
      <NextSeo
        title="Fatih Muhamad Ridho"
        description="Portofolio resmi Fatih Muhamad Ridho, seorang Web Developer dan Software Engineer berpengalaman di bidang Next.js, React, TypeScript, dan arsitektur aplikasi modern. Temukan project, pengalaman, dan artikel terbaru di sini."
        canonical="https://fatihmuhamadridho.vercel.app/"
        openGraph={{
          url: 'https://fatihmuhamadridho.vercel.app/',
          title: 'Fatih Muhamad Ridho',
          description:
            'Website resmi Fatih Muhamad Ridho. Seorang Web Developer dan Software Engineer berfokus pada Next.js, React, TypeScript, dan solusi digital modern.',
          siteName: 'Fatih Muhamad Ridho',
        }}
      />
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
            profileData={profileData?.data || undefined}
            locale={locale}
            isLoading={isLoading}
          />
          <Stack className="pt-[30px] pb-[96px] w-full lg:w-1/2 lg:py-[96px]">
            <section ref={aboutRef} className="mb-[144px]">
              {isLoading ? (
                Array.from({ length: 4 }).map((item, index) => (
                  <Skeleton key={index} mt={24} w={'100%'} h={120} radius={'md'} />
                ))
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: profileData?.data?.detail.long_description[locale] || '',
                  }}
                />
              )}
            </section>
            <section ref={experienceRef} className="mb-[144px]">
              {isLoading
                ? Array.from({ length: 4 }).map((item, index) => (
                    <Skeleton key={index} mt={24} w={'100%'} h={250} radius={'md'} />
                  ))
                : profileData?.data?.experiences?.map((item, index) => (
                    <Box
                      key={index}
                      className="relative mb-[48px] py-2 px-2 grid grid-cols-8 gap-4 cursor-pointer group"
                    >
                      <Box className="absolute block -inset-x-4 -inset-y-4 z-0 rounded-md group-hover:drop-shadow-lg group-hover:bg-[#1e293b80]"></Box>
                      <Text className="col-span-2 !text-xs z-10" fw={500} tt={'uppercase'}>
                        {Experience.getMonthYearText(item.start_date, locale)} -{' '}
                        {!item.is_present
                          ? Experience.getMonthYearText(item.end_date, locale)
                          : isPresentLocale(locale)}
                      </Text>
                      <Stack className="col-span-6 z-10" gap={12}>
                        <Text className="!leading-tight">
                          {item.role} - {item.company}
                        </Text>
                        <Text className="!text-ui-secondary" fz={14}>
                          {item.description[locale]}
                        </Text>
                        <Group>
                          {item.tools.map((badge) => (
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
                  ))}
              <Link href={'/Fatih Muhamad Ridho-resume.pdf'} locale={false} target="__blank">
                <Box className="cursor-pointer hover:text-[#5eead4]">{tResume('button')}</Box>
              </Link>
            </section>
            <section ref={projectRef} className="mb-[144px]">
              {isLoading
                ? Array.from({ length: 4 }).map((item, index) => (
                    <Skeleton key={index} mt={24} w={'100%'} h={200} radius={'md'} />
                  ))
                : profileData?.data?.projects
                    ?.filter((data) => data.is_favorite)
                    .slice(0, 4)
                    .map((item, index) => {
                      if (index < 4 && item.is_favorite)
                        return (
                          <Box
                            key={index}
                            className="relative mb-[48px] py-2 px-2 grid grid-cols-8 gap-4 cursor-pointer group"
                          >
                            <Box className="absolute block -inset-x-4 -inset-y-4 z-0 rounded-md group-hover:drop-shadow-lg group-hover:bg-[#1e293b80]"></Box>
                            <Image
                              className="col-span-2 z-10 rounded"
                              src={item.thumbnail}
                              alt={item.title}
                              width={200}
                              height={48}
                              loading="lazy"
                            />
                            <Stack className="col-span-6 z-10" gap={12}>
                              <Text className="!leading-tight">
                                {item.role} - {item.made_at}
                              </Text>
                              <Text className="!text-ui-secondary" fz={14}>
                                {item.description[locale]}
                              </Text>
                              <Group>
                                {item.tools.map((badge) => (
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
                {tFooter('description') + ` Versi ${APP_VERSION}`}
              </Text>
            </section>
          </Stack>
        </Flex>
      </motion.div>
    </Layout>
  );
};

export default HomePage;
