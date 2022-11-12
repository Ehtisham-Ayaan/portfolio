import React from "react";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar.js";
const main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Ehtisham's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar path={router.asPath} style={{ marginTop: "-100px" }} />
      <Container maxW="container.md" pd={14} style={{ marginTop: "100px" }}>
        {children}
      </Container>
    </Box>
  );
};

export default main;
