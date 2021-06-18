import Head from "next/head";
import styled from "styled-components";
import { HomeWrapper } from "..";
import { Sidebar, Body } from "../../components";
import GlobalStyle from "../../styles/globalstyles";

const Chat = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <GlobalStyle />
        <HomeWrapper>
          <Sidebar />
          <Body />
        </HomeWrapper>
      </Container>
    </>
  );
};

export default Chat;

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;
