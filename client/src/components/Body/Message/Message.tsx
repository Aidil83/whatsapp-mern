import { forwardRef } from "react";
import styled from "styled-components";
import { Typography, CardContent, Card } from "@material-ui/core";
import { IMessages } from "../../../redux/slices/messages.slice";
import { useSelector } from "react-redux";
import { usernameSelector } from "../../../redux/slices/username.slice";

// FC do not have a ref, which is needed for react-flip-move to work. Hence, forwardRef is needed.
const Message = forwardRef(({ message }: { message: IMessages }, ref) => {
  const username = useSelector(usernameSelector);
  const isUser = username === message.name;
  return (
    <StyledCard user={isUser.toString()} ref={ref}>
      <CardContent>
        <Typography color="primary" variant="h6" component="h2">
          {message.message || ""}
        </Typography>
      </CardContent>
    </StyledCard>
  );
});

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
