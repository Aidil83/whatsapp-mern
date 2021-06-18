import styled from "styled-components";
import { HomeWrapper } from ".";
import { Sidebar, Body } from "../components";
import GlobalStyle from "../styles/globalstyles";

function testing() {
  return (
    <Container>
      <GlobalStyle />
      <HomeWrapper>
        <Sidebar />
        <Body />
      </HomeWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export default testing;
