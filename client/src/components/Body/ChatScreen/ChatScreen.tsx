import { BodyWallpaper } from "../Body.styles";
import Message from "../Message/Message";
import FlipMove from "react-flip-move";
import { useQuery } from "react-query";
import * as api from "../../../api/wsApi";
import { IMessages } from "../../../interfaces/types";
import AlwaysScrollToBottom from "../AlwaysScrollToBottom";

const ChatScreen = () => {
  const { data } = useQuery("messages", api.getMessagesData);

  return (
    <BodyWallpaper>
      <FlipMove duration={250} easing="ease-out">
        {data?.map((messageData: IMessages) => (
          <Message key={messageData._id} messageData={messageData} />
        ))}
      </FlipMove>
      <AlwaysScrollToBottom />
    </BodyWallpaper>
  );
};

export default ChatScreen;
