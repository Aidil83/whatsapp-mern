import { BodyWallpaper } from "../Body.styles";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import {
  IMessages,
  messagesSelector,
} from "../../../redux/slices/messages.slice";
import FlipMove from "react-flip-move";
import { useQuery } from "react-query";
import * as api from "../../../api/wsApi";

const ChatScreen = () => {
  const messages = useSelector(messagesSelector);
  const { data, isLoading } = useQuery("messages", api.getMessages);
  return (
    <BodyWallpaper>
      <FlipMove duration={250} easing="ease-out">
        {!isLoading &&
          data.map((messageData: IMessages, idx: number) => (
            <Message key={idx} messageData={messageData} />
          ))}
      </FlipMove>
    </BodyWallpaper>
  );
};

export default ChatScreen;
