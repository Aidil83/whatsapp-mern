import Head from "next/head";
import styled from "styled-components";
import { HomeWrapper, IndexContainer } from "..";
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
        <IndexContainer>
          <GreenStrip />
          <HomeWrapper>
            <Sidebar />
            <Body />
            <UserPrompt />
          </HomeWrapper>
        </IndexContainer>
      </Container>
    </>
  );
};

export default Chat;

const Container = styled.div`
  height: 90%;
  width: 100%;
  position: relative;
  z-index: 1;
`;
export const GreenStrip = styled.div`
  width: 100%;
  height: 142px;
  background-color: #02917e;
  position: absolute;
  top: 0;
  z-index: 0;
`;
