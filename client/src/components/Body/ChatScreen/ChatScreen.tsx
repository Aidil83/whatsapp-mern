import { BodyWallpaper } from "../Body.styles";
import Message from "../Message/Message";
import FlipMove from "react-flip-move";
import * as api from "../../../api/wsApi";
import { IMessages } from "../../../interfaces/types";
import AlwaysScrollToBottom from "../AlwaysScrollToBottom";

const ChatScreen = () => {
  const { data } = api.useMessages();

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
