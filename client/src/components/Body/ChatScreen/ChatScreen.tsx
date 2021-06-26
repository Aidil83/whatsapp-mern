import { BodyWallpaper } from "../Body.styles";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { messagesSelector } from "../../../redux/slices/messages.slice";
import FlipMove from "react-flip-move";

const ChatScreen = () => {
  const messages = useSelector(messagesSelector);
  return (
    <BodyWallpaper>
      <FlipMove duration={250} easing="ease-out">
        {messages.map((message) => (
          <Message message={message} />
        ))}
      </FlipMove>
    </BodyWallpaper>
  );
};

export default ChatScreen;