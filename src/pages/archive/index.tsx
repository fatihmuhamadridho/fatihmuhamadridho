import { Layout } from "@/components";
import { Box, Group, Space, Text } from "@mantine/core";
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

  return (
    <Layout title="Archive | Fatih Muhamad Ridho">
      <motion.div
        className="px-[96px] w-full max-w-7xl min-h-screen"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.3 }}
      >
        <Space h={36} />
        <Group
          className="cursor-pointer text-[#5eead4] group"
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
        <Box>ArchivePage</Box>
      </motion.div>
    </Layout>
  );
};

export default ArchivePage;
