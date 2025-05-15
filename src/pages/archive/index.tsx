import { Layout } from '@/shared/components';
import { Group, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { motion } from 'motion/react';
import { CONST_PROJECTS } from '@/shared/constants';
import Link from 'next/link';

const pageVariants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -50 } };

const ArchivePage = () => {
  const router = useRouter();

  return (
    <Layout title="Archive | Fatih Muhamad Ridho">
      <motion.div
        className="py-[96px] w-full max-w-7xl min-h-screen"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.3 }}
      >
        <Group className="w-max cursor-pointer text-[#5eead4] group" gap={4} onClick={() => router.push('/')}>
          <IconArrowLeft className="transition-all group-hover:-translate-x-2" size={16} color="#5eead4" />
          <Text>Fatih Muhamad Ridho</Text>
        </Group>
        <Text fz={48} fw={700}>
          Archive
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
            {CONST_PROJECTS.map((item, index) => (
              <tr key={index} className="border-b border-slate-300/10 last:border-none">
                <td className="py-4 pr-8 table-cell">{item.year}</td>
                <td className="py-4 pr-8 leading-snug table-cell">{item.project}</td>
                <td className="hidden py-4 pr-8 lg:table-cell">{item.madeAt}</td>
                <td className="hidden py-4 pr-8 lg:table-cell">
                  <ul className="w-full flex flex-wrap -translate-y-1.5">
                    {item.buildWith.map((badge, index) => (
                      <li key={index} className="my-1 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {badge}
                        </div>
                      </li>
                    ))}
                  </ul>
                </td>
                {item?.link && (
                  <td className="py-4 pr-8 lg:table-cell">
                    <Link href={item.link.href} target="__blank">
                      {item.link?.alias}
                    </Link>
                  </td>
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
