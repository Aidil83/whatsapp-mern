import Head from "next/head";
import styled from "styled-components";
import { HomeWrapper } from "..";
import { Sidebar, Body } from "../../components";
import UserPrompt from "../../components/Footer/UserPrompt/UserPrompt";
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
          <UserPrompt />
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
