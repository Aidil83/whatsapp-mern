import { forwardRef } from "react";
import styled from "styled-components";
import { Typography, CardContent, Card } from "@material-ui/core";
import { IMessages } from "../../../redux/slices/messages.slice";
import { useSelector } from "react-redux";
import { usernameSelector } from "../../../redux/slices/username.slice";

// FC do not have a ref, which is needed by react-flip-move to work. Hence, forwardRef is needed.
const Message = forwardRef(({ message }: { message: IMessages }, ref) => {
  const username = useSelector(usernameSelector);
  const isUser = username === message.username;
  return (
    <StyledCard isUser={isUser} ref={ref}>
      <CardContent>
        <Typography color="primary" variant="h6" component="h2">
          {message.text || ""}
        </Typography>
      </CardContent>
    </StyledCard>
  );
});

const StyledCard = styled(Card)`
  width: fit-content;
  margin: 0.25em;
  ${({ isUser }: { isUser: boolean }) => isUser && "margin-left: auto"};
  background-color: ${({ isUser }: { isUser: boolean }) =>
    isUser ? "#DCF8C6 !important" : "#fff !important"};
  & .MuiTypography-colorPrimary {
    color: ${({ theme }) => theme.primary};
  }
`;

export default Message;
