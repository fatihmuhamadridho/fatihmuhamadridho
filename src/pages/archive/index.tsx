import { Layout } from '@/shared/components';
import { Group, Skeleton, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { GetStaticPropsContext } from 'next';
import { useProfileUser } from '@/hooks/user.hook';
import { CONST_PROFILE_USERNAME } from '@/configs/base.config';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { UserFEController } from '@/core/domains/controllers/user.fe.controller';
import { Project } from '@/core/domains/models/project.model';

const pageVariants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -50 } };

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
      locale: locale,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
}

const ArchivePage = (props: any) => {
  const { locale = 'id' } = props;
  const { data: profileData, isLoading } = useProfileUser({ u: CONST_PROFILE_USERNAME });

  return (
    <Layout>
      <NextSeo
        title="Archive | Fatih Muhamad Ridho"
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
        className="py-[96px] w-full max-w-7xl min-h-screen"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.3 }}
      >
        <Link href={'/'}>
          <Group className="w-max cursor-pointer text-[#5eead4] group" gap={4}>
            <IconArrowLeft className="transition-all group-hover:-translate-x-2" size={16} color="#5eead4" />
            <Text>Fatih Muhamad Ridho</Text>
          </Group>
        </Link>
        <Text fz={48} fw={700}>
          {locale === 'en' ? 'Archive' : 'Arsip'}
        </Text>
        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 backdrop-blur border-b border-slate-300/10 bg-slate-900/75">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold table-cell">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold table-cell">Project</th>
              <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">Made at</th>
              <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">Build with</th>
              <th className="py-4 pr-8 text-sm font-semibold table-cell">Link</th>
            </tr>
          </thead>
          <tbody>
            {profileData?.data?.projects?.map((item, index) => (
              <tr key={index} className="border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-8 table-cell">
                  {isLoading ? <Skeleton w={35} h={35} radius={'md'} /> : Project.getYear(item.date)}
                </td>
                <td className="py-4 pr-8 leading-snug table-cell">
                  {isLoading ? <Skeleton w={150} h={35} radius={'md'} /> : item.title}
                </td>
                <td className="hidden py-4 pr-8 lg:table-cell">
                  {isLoading ? <Skeleton w={100} h={35} radius={'md'} /> : item.made_at}
                </td>
                <td className="hidden py-4 pr-8 lg:table-cell">
                  <ul className="w-full flex flex-wrap -translate-y-1.5">
                    {isLoading
                      ? Array.from({ length: 2 }).map((item, index) => (
                          <Skeleton key={index} ml={12} w={100} h={35} radius={'md'} />
                        ))
                      : item.tools.map((badge, index) => (
                          <li key={index} className="my-1 mr-1.5">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                              {badge}
                            </div>
                          </li>
                        ))}
                  </ul>
                </td>
                {isLoading ? (
                  <Skeleton w={200} h={35} radius={'md'} />
                ) : (
                  item?.link && (
                    <td className="py-4 pr-8 lg:table-cell">
                      <Link href={item.link.url} target="__blank">
                        {item.link.title}
                      </Link>
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </Layout>
  );
};

export default ArchivePage;
