import Footer from "@/components/organisms/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";
import { Container, MediaQuery } from "@mantine/core";
import Head from "next/head";
import React from "react";

interface DefaultProps {
  title: string;
  children?: any;
}

const Default = (props: DefaultProps) => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <>
        <Navbar />
        <MediaQuery smallerThan={600} styles={{ display: "none" }}>
          <Container fluid p={0}>
            {children}
          </Container>
        </MediaQuery>
        <MediaQuery largerThan={600} styles={{ display: "none" }}>
          <Container fluid p={16}>
            {children}
          </Container>
        </MediaQuery>
        <Footer />
      </>
    </>
  );
};

export default Default;
