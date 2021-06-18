import React from "react";
import Head from "next/head";
import GlobalStyle from "../styles/globalstyles";
import { Sidebar, Body } from "../components";
import styled from "styled-components";
export default function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp Mern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <HomeWrapper>
        <Sidebar />
        <Body />
      </HomeWrapper>
    </>
  );
}

export const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
