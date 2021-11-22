import React, { useEffect, useState } from "react";
import Head from "next/head";
import GlobalStyle from "../styles/globalstyles";
import { Sidebar, Body } from "../components";
import styled from "styled-components";
import Pusher from "pusher-js";
import * as api from "../api/wsApi";
import { useDispatch } from "react-redux";

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
      <IndexContainer>
        <HomeWrapper>
          <Sidebar />
          <Body />
        </HomeWrapper>
      </IndexContainer>
    </>
  );
}

export const IndexContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  max-height: 880px;
  height: 100%;
  display: flex;
  position: relative;
  box-shadow: 0px -1px 7px 5px rgb(0 0 0 / 20%);
`;
