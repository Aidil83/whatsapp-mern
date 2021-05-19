import React from "react";
import Head from "next/head";
import GlobalStyle from "../styles/globalstyles";
import { Header, Sidebar, Footer } from "../components";
export default function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp Mern</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <Footer />
    </>
  );
}
