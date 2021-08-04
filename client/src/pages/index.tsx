import React, { useEffect, useState } from "react";
import Head from "next/head";
import GlobalStyle from "../styles/globalstyles";
import { Sidebar, Body } from "../components";
import styled from "styled-components";
import Pusher from "pusher-js";
import * as api from "../api/wsApi";
import { useDispatch } from "react-redux";
import { getMessages, setMessage } from "../redux/slices/messages.slice";
import { useQuery } from "react-query";

export default function Home() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const pusher = new Pusher("c1016e2807f8be6e793c", {
  //     cluster: "us2",
  //   });

  //   const channel = pusher.subscribe("messages");
  //   channel.bind("inserted", (newMessages: any): void => {
  //     console.log(newMessages);
  //     dispatch(setMessage(newMessages));
  //   });
  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, [setMessage, data]);

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
