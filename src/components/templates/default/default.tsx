import Footer from "@/components/atoms/footer/footer";
import Navbar from "@/components/molecules/navbar/navbar";
import { Flex } from "@mantine/core";
import Head from "next/head";
import React from "react";

const Default = ({ children, title }: { children: any; title: string | any }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex direction={"column"}>
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Default;
