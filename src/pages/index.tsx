import { Layout, ProfileSection } from '@/shared/components';
import { Flex, Stack } from '@mantine/core';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { useProfileUser } from '@/hooks/user.hook';
import { APP_VERSION, CONST_PROFILE_USERNAME } from '@/configs/base.config';
import { NextSeo } from 'next-seo';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { UserFEController } from '@/core/domains/controllers/user.fe.controller';
import LongDescriptionSection from '@/shared/components/sections/LongDescriptionSection/LongDescriptionSection';
import ExperienceSection from '@/shared/components/sections/ExperienceSection/ExperienceSection';
import ProjectSection from '@/shared/components/sections/ProjectSection/ProjectSection';
import FooterSection from '@/shared/components/sections/FooterSection/FooterSection';

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
      dehydratedState: dehydrate(queryClient),
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
            <LongDescriptionSection
              ref={aboutRef}
              isLoading={isLoading}
              __html={profileData?.data?.detail.long_description[locale]}
            />
            <ExperienceSection
              ref={experienceRef}
              isLoading={isLoading}
              data={profileData?.data?.experiences}
              locale={locale}
              buttonText={tResume('button')}
            />
            <ProjectSection
              ref={projectRef}
              isLoading={isLoading}
              data={profileData?.data?.projects}
              locale={locale}
              buttonText={tProject('button')}
            />
            <FooterSection text={tFooter('description') + ` v${APP_VERSION}`} />
          </Stack>
        </Flex>
      </motion.div>
    </Layout>
  );
};

export default HomePage;
