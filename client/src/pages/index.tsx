import React, { useEffect } from "react";
import Head from "next/head";
import GlobalStyle from "../styles/globalstyles";
import { Sidebar, Body } from "../components";
import styled from "styled-components";
import Pusher from "pusher-js";
import { useQuery } from "react-query";
import axios from "../api/axios";

export default function Home() {
  const { isLoading, error, data } = useQuery("messagesData", async () => {
    const { data } = await axios("/messages/sync");
    return data;
  });

  useEffect(() => {
    const pusher = new Pusher("c1016e2807f8be6e793c", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data: any): void => {
      alert(JSON.stringify(data));
    });
  }, []);

  console.log("data:", data);

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
