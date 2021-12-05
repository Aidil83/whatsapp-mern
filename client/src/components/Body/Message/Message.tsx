import { forwardRef, useRef } from "react";
import styled from "styled-components";
import { Typography, CardContent, Card } from "@material-ui/core";
import { useSelector } from "react-redux";
import { usernameSelector } from "../../../redux/slices/username.slice";
import { IMessages } from "../../../interfaces/types";
import { clickChatSelector } from "../../../redux/slices/clickChat.slice";
import { DateTime } from "luxon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// FC do not have a ref, which is needed for react-flip-move to work. Hence, forwardRef is needed.
const Message = forwardRef(
  ({ messageData }: { messageData: IMessages }, ref) => {
    const { username } = useSelector(usernameSelector);
    const chat = useSelector(clickChatSelector);

    const isUser = username === messageData.name;
    const isChatName = messageData.roomName === chat.roomName;

    // Convert ISO to local time
    const dt = DateTime.fromISO(messageData.updatedAt.toString());
    let messageOptionsRef: any = useRef(null);
    let tween: any = useRef(null);

    // useEffect(() => {
    //   tween.current = gsap.timeline().to(containerRef.current, {
    //     opacity: 1,
    //     height: 35,
    //     minWidth: "30ch",
    //     backgroundColor: "rgb(212,212,212, .4)",
    //     duration: 0.5,
    //   });
    //   tween2.current = gsap.timeline().to(searchboxRef.current, {
    //     opacity: 1,
    //     minWidth: "30ch",
    //     height: 35,
    //     duration: 0.5,
    //   });

    //   return () => {
    //     tween.current.kill();
    //     tween2.current.kill();
    //   };
    // }, []);

    // useEffect(() => {
    //   if (isSearchbox) {
    //     searchboxRef?.current?.focus();
    //     tween.current.play();
    //     tween2.current.play();
    //   } else {
    //     tween.current.reverse();
    //     tween2.current.reverse();
    //   }
    // }, [isSearchbox]);

    return (
      <>
        {isChatName && (
          <StyledCard
            user={isUser.toString()}
            ref={ref}
            isDisplay={!isUser && messageData.isDisplay}
          >
            <CardContent>
              <MessageDesc
                color={messageData.nameColor}
                isDisplay={messageData.isDisplay}
              >
                {!isUser && messageData.name}
              </MessageDesc>

              <InnerContent>
                <Typography color="primary" variant="h6" component="h2">
                  <h3 style={{ fontWeight: "normal", fontSize: "1.15rem" }}>
                    {messageData.message}
                  </h3>
                </Typography>
                <MessageOptions ref={messageOptionsRef}>
                  <KeyboardArrowDownIcon />
                </MessageOptions>
                <MessageTime>
                  <Timestamp>
                    {/* Converts unix time to international time */}
                    {messageData.updatedAt
                      ? dt.toLocaleString(DateTime.TIME_SIMPLE)
                      : ""}
                  </Timestamp>
                </MessageTime>
              </InnerContent>
            </CardContent>
          </StyledCard>
        )}
      </>
    );
  }
);

interface StyleProps {
  user: string;
  isDisplay: boolean;
  color?: string;
}

type isDisplayColor = Pick<StyleProps, "isDisplay" | "color">;

const StyledCard = styled(Card)<StyleProps>`
  width: fit-content;
  max-width: 500px;
  margin: 0.25em;
  padding: 0.3em;
  margin-top: ${({ isDisplay }) => (isDisplay ? "0.65em" : "0em")};
  ${({ user }) => user == "true" && "margin-left: auto"};
  margin-bottom: 3px;
  background-color: ${({ user }) =>
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
const MessageTime = styled.h5`
  width: fit-content;
  font-size: 0.7rem;
  margin-left: auto;
  color: gray;
  position: absolute;
  right: 5px;
  bottom: 2px;
`;

const InnerContent = styled.div`
  width: fit-content;
  max-width: 400px;
  display: flex;
  flex-flow: column wrap;
`;

const MessageDesc = styled.span<isDisplayColor>`
  display: ${({ isDisplay }) => (isDisplay ? "inline" : "none")};
  font-size: 0.8em;
  font-weight: bold;
  color: ${({ color }) => color};
`;
const Timestamp = styled.span`
  font-size: 0.7rem;
  font-weight: normal;
  color: gray;
`;
const MessageOptions = styled.div`
  position: absolute;
  right: 0px;
  top: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  color: rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default Message;
