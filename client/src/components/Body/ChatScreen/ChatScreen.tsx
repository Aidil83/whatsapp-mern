import styled from "styled-components";
import { BodyWallpaper } from "../Body.styles";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { messagesSelector } from "../../../redux/slices/messages.slice";

const ChatScreen = () => {
  const messages = useSelector(messagesSelector);
  return (
    <BodyWallpaper>
      {/* <LeftChat> */}
      {messages.map((message, idx) => {
        return <Message key={idx} message={message} />;
      })}
      {/* </LeftChat> */}
    </BodyWallpaper>
  );
};

const LeftChat = styled.div`
  margin-right: auto;
  width: 200px;
  height: 50px;
  border-radius: 8px;
`;
const RightChat = styled.div`
  margin-left: auto;
  width: 200px;
  height: 50px;
  border-radius: 10px;
`;

export default ChatScreen;
