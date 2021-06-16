import styled from "styled-components";
import { BodyWallpaper } from "../Body.styles";
import Message from "../Message/Message";

const ChatScreen = () => {
  return (
    <BodyWallpaper>
      <LeftChat>
        <Message bgColor="#fff" />
      </LeftChat>
      <RightChat>
        <Message bgColor="#DCF8C6" />
      </RightChat>
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
