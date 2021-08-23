import { useEffect, useRef } from "react";
import { Footer, Header } from "..";
import { BodyContainer } from "./Body.styles";
import ChatScreen from "./ChatScreen/ChatScreen";

const Body = () => {
  return (
    <>
      <BodyContainer>
        <Header />
        <ChatScreen />
        <Footer />
      </BodyContainer>
    </>
  );
};

export default Body;
