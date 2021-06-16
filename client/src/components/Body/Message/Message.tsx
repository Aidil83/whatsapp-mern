import styled from "styled-components";
import { Typography, CardContent, Card } from "@material-ui/core";
import { IMessages } from "../../../redux/slices/messages.slice";
import { useSelector } from "react-redux";
import { usernameSelector } from "../../../redux/slices/username.slice";

const Message = ({ message }: { message: IMessages }) => {
  const username = useSelector(usernameSelector);
  const isUser = username === message.username;
  return (
    <StyledCard isUser={isUser}>
      <CardContent>
        <Typography color="primary" variant="h6" component="h2">
          {message.text || ""}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

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
