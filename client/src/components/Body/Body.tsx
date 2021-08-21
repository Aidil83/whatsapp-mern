import { useEffect, useRef } from "react";
import { Footer, Header } from "..";
import { BodyContainer } from "./Body.styles";
import ChatScreen from "./ChatScreen/ChatScreen";

const Body = () => {
  let bottomRef = useRef(null);

  const scrollToBottom = () => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView();
    }
  };

  useEffect(scrollToBottom);

  // useEffect(() => {
  //   console.log(bottomRef.current, "body.tsx");
  // }, []);
  return (
    <>
      <BodyContainer>
        <Header />
        <ChatScreen forwardedRef={bottomRef} />
        <Footer />
      </BodyContainer>
    </>
  );
};

export default Body;
