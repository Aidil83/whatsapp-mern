import { forwardRef } from "react";
import styled from "styled-components";
import { Typography, CardContent, Card } from "@material-ui/core";
import { useSelector } from "react-redux";
import { usernameSelector } from "../../../redux/slices/username.slice";
import { IMessages } from "../../../interfaces/types";
import { clickChatSelector } from "../../../redux/slices/clickChat.slice";
import { DateTime } from "luxon";
import { useState } from "react";

// FC do not have a ref, which is needed for react-flip-move to work. Hence, forwardRef is needed.
const Message = forwardRef(
  ({ messageData }: { messageData: IMessages }, ref) => {
    const [display, setDisplay] = useState(true);
    const username = useSelector(usernameSelector);
    const chat = useSelector(clickChatSelector);

    const isUser = username === messageData.name;
    const isChatName = messageData.roomName === chat.roomName;

    // Convert ISO to local time
    const dt = DateTime.fromISO(messageData.updatedAt.toString());
    return (
      <>
        {isChatName && (
          <StyledCard user={isUser.toString()} ref={ref}>
            <CardContent>
              <MessageDesc color={messageData.nameColor}>
                {messageData.name}
              </MessageDesc>
              <Typography color="primary" variant="h6" component="h2">
                <em style={{ fontWeight: "normal", fontSize: "1.15rem" }}>
                  {messageData.message}
                </em>
              </Typography>
              <h5
                style={{
                  width: "fit-content",
                  fontSize: ".7rem",
                  marginLeft: "auto",
                  color: "gray",
                  position: "absolute",
                  right: 5,
                  bottom: 2,
                }}
              >
                <Timestamp>
                  {/* Converts unix time to international time */}
                  {messageData.updatedAt
                    ? dt.toLocaleString(DateTime.TIME_SIMPLE)
                    : ""}
                </Timestamp>
              </h5>
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
  padding: 0.3em;
  ${({ user }: { user: string }) => user == "true" && "margin-left: auto"};
  background-color: ${({ user }: { user: string }) =>
    user == "true" ? "#DCF8C6 !important" : "#fff !important"};
  &.MuiPaper-rounded {
    border-radius: 12px;
  }
  & .MuiTypography-colorPrimary {
    color: ${({ theme }) => theme.primary};
  }
  & .MuiCardContent-root {
    position: relative;
    padding: 0.2em 0.3em;
    padding-right: 4em;
    min-width: 4em;
  }
  & .MuiCardContent-root:last-child {
    padding-bottom: 0;
  }
  & .MuiTypography-h6 {
    font-size: 1.15rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: 0.0075em;
  }
`;
const MessageDesc = styled.span`
  font-size: 0.8em;
  font-weight: bold;
  color: ${({ color }) => color};
`;
const Timestamp = styled.span`
  font-size: 0.7rem;
  font-weight: normal;
  color: gray;
`;

export default Message;
