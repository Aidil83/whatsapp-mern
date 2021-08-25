import { forwardRef } from "react";
import styled from "styled-components";
import { Typography, CardContent, Card } from "@material-ui/core";
import { useSelector } from "react-redux";
import { usernameSelector } from "../../../redux/slices/username.slice";
import { IMessages } from "../../../interfaces/types";
import { clickChatSelector } from "../../../redux/slices/clickChat.slice";

// FC do not have a ref, which is needed for react-flip-move to work. Hence, forwardRef is needed.
const Message = forwardRef(
  ({ messageData }: { messageData: IMessages }, ref) => {
    const username = useSelector(usernameSelector);
    const chat = useSelector(clickChatSelector);
    const isUser = username === messageData.name;
    const isChatName = messageData.roomName === chat.roomName;
    return (
      <>
        {isChatName && (
          <StyledCard user={isUser.toString()} ref={ref}>
            <CardContent>
              <Typography color="primary" variant="h6" component="h2">
                {messageData.message}
              </Typography>
            </CardContent>
          </StyledCard>
        )}
      </>
    );
  }
);

const StyledCard = styled(Card)`
  width: fit-content;
  margin: 0.25em;
  ${({ user }: { user: string }) => user == "true" && "margin-left: auto"};
  background-color: ${({ user }: { user: string }) =>
    user == "true" ? "#DCF8C6 !important" : "#fff !important"};
  & .MuiTypography-colorPrimary {
    color: ${({ theme }) => theme.primary};
  }
`;

export default Message;
