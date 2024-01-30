import { Container } from "@mantine/core";
import Head from "next/head";
import React from "react";

interface DefaultProps {
  children: React.ReactNode;
  title: string;
}

const Default = (props: DefaultProps) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maw={760} fluid p={20}>
        {children}
      </Container>
    </>
  );
};

export default Default;
