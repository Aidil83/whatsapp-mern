import { BodyWallpaper } from "../Body.styles";
import Message from "../Message/Message";
import FlipMove from "react-flip-move";
import { useQuery } from "react-query";
import * as api from "../../../api/wsApi";
import { IMessages } from "../../../interfaces/types";
import { useEffect, useRef } from "react";

const ChatScreen = ({ forwardedRef }: any) => {
  const { data, isLoading } = useQuery("messages", api.getMessagesData);
  if (isLoading) return <h1>Loading...</h1>;

  // useEffect(() => {
  //   if (messagesRef.current) {
  //     scrollToBottom();
  //   }
  // }, [messagesRef]);

  return (
    <BodyWallpaper>
      <FlipMove duration={250} easing="ease-out">
        {data.map((messageData: IMessages) => (
          <Message key={messageData._id} messageData={messageData} />
        ))}
      </FlipMove>
      <div ref={forwardedRef} />
    </BodyWallpaper>
  );
};

export default ChatScreen;
