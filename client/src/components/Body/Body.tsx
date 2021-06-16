import styled from "styled-components";
import { Footer, Header } from "..";
import { BodyContainer, BodyWallpaper } from "./Body.styles";

const Body = () => {
  return (
    <>
      <BodyContainer>
        <Header />
        <BodyWallpaper>
          <LeftChat></LeftChat>
          <RightChat></RightChat>
        </BodyWallpaper>
        <Footer />
      </BodyContainer>
    </>
  );
};

const LeftChat = styled.div`
  margin-right: auto;
  width: 200px;
  height: 50px;
  border-radius: 8px;
  background-color: white;
`;
const RightChat = styled.div`
  margin-left: auto;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.greenChat};
`;

export default Body;
