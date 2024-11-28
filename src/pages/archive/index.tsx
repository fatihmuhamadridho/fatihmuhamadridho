import { Layout } from "@/components";
import { Group, Text } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/router";
import React from "react";
import { motion } from "motion/react";

const pageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const ArchivePage = () => {
  const router = useRouter();
  const data = [
    {
      year: 2024,
      project: "CCPL POJK Phrase 2",
      madeAt: "CIMB Niaga",
      buildWith: [
        "ReactJs",
        "React Native",
        "TypeScript",
        "HTML",
        "CSS",
        "Redux",
      ],
      link: {
        alias: "Octo Smart",
        href: "https://alphasft.cimbniaga.co.id/",
      },
    },
    {
      year: 2024,
      project: "CCPL POJK Phrase 1",
      madeAt: "CIMB Niaga",
      buildWith: [
        "ReactJs",
        "React Native",
        "TypeScript",
        "HTML",
        "CSS",
        "Redux",
      ],
      link: {
        alias: "Octo Smart",
        href: "https://alphasft.cimbniaga.co.id/",
      },
    },
    {
      year: 2024,
      project: "Revamp FMC Dashboard 3",
      madeAt: "SALT",
      buildWith: [
        "AngularJs",
        "TypeScript",
        "SCSS",
        "NPM",
        "Bit Cloud",
        "Material Angular",
      ],
    },
    {
      year: 2024,
      project: "Revamp FMC Dashboard 2",
      madeAt: "SALT",
      buildWith: [
        "AngularJs",
        "TypeScript",
        "SCSS",
        "NPM",
        "Bit Cloud",
        "Material Angular",
      ],
    },
    {
      year: 2024,
      project: "Generate AI Response Summary TSurvey",
      madeAt: "SALT",
      buildWith: ["AngularJs", "TypeScript", "SCSS"],
      link: {
        alias: "TSurvey",
        href: "https://tsurvey.id/",
      },
    },
    {
      year: 2024,
      project: "Revamp Target Respondent TSurvey",
      madeAt: "SALT",
      buildWith: ["AngularJs", "TypeScript", "SCSS"],
      link: {
        alias: "TSurvey",
        href: "https://tsurvey.id/",
      },
    },
    {
      year: 2024,
      project: "Cimb Niaga Auto Finance Octo Smart",
      madeAt: "SALT",
      buildWith: ["AngularJs", "TypeScript", "SCSS"],
      link: {
        alias: "CIMB Niaga",
        href: "https://tsurvey.id/",
      },
    },
    {
      year: 2024,
      project: "CR Lending Octo Smart",
      madeAt: "Cimb Niaga",
      buildWith: ["AngularJs", "TypeScript", "SCSS"],
      link: {
        alias: "OCTO Smart by CIMB Niaga",
        href: "https://tsurvey.id/",
      },
    },
    {
      year: 2024,
      project: "Sun Linfe Octo Smart",
      madeAt: "CIMB Niaga",
      buildWith: ["AngularJs", "TypeScript", "SCSS"],
      link: {
        alias: "OCTO Smart by CIMB Niaga",
        href: "https://play.google.com/store/apps/details?id=com.rm_tools&hl=id",
      },
    },
  ];

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
        <Group
          className="w-max cursor-pointer text-[#5eead4] group"
          gap={4}
          onClick={() => router.back()}
        >
          <IconArrowLeft
            className="transition-all group-hover:-translate-x-2"
            size={16}
            color="#5eead4"
          />
          <Text>Fatih Muhamad Ridho</Text>
        </Group>
        <Text fz={48} fw={700}>
          ArchivePage
        </Text>
        <table className="mt-12 w-full border-collapse text-left">
          <thead className="sticky top-0 backdrop-blur border-b border-slate-300/10 bg-slate-900/75">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold table-cell">
                Year
              </th>
              <th className="py-4 pr-8 text-sm font-semibold table-cell">
                Project
              </th>
              <th className="py-4 pr-8 text-sm font-semibold table-cell">
                Made at
              </th>
              <th className="py-4 pr-8 text-sm font-semibold table-cell">
                Build with
              </th>
              <th className="py-4 pr-8 text-sm font-semibold table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="border-b border-slate-300/10 last:border-none"
              >
                <td className="py-4 pr-8 table-cell">{item.year}</td>
                <td className="py-4 pr-8 leading-snug table-cell">
                  {item.project}
                </td>
                <td className="py-4 pr-8 table-cell">{item.madeAt}</td>
                <td className="py-4 pr-8 table-cell">
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
                <td className="py-4 pr-8 table-cell">{item.link?.alias}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </Layout>
  );
};

export default ArchivePage;
