import React, { useEffect, useState } from "react";
import Head from "next/head";
import GlobalStyle from "../styles/globalstyles";
import { Sidebar, Body } from "../components";
import styled from "styled-components";
import Pusher from "pusher-js";
import * as api from "../api/messagesApi";

export default function Home() {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    api.getMessages.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("c1016e2807f8be6e793c", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessages: any): void => {
      alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log("data:", messages);

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
