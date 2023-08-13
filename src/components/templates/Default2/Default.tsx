import Footer from "@/components/organisms/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";
import { Container } from "@mantine/core";
import Head from "next/head";
import React from "react";

interface DefaultProps {
  title?: string;
  children?: any;
}

const Default = ({ title, children }: DefaultProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container fluid p={0}>
        <Navbar />
        <Container mih={"84vh"} fluid p={0}>
          {children}
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Default;
