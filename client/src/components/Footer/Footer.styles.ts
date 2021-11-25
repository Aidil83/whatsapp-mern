import styled, { css } from "styled-components";
import InsertEmoticon from "@material-ui/icons/InsertEmoticon";
import AttachFile from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@mui/icons-material/Send";

export const sharedIconStyle = css`
  color: ${({ theme }) => theme.medium};
`;
export const FooterContainer = styled.div`
  position: relative;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.lighter};
  padding: 0 0.5em;
`;
export const StyledSmileIcons = styled(InsertEmoticon)`
  ${sharedIconStyle};
  margin: 0.15em 0.25em;
`;
export const StyledClipIcons = styled(AttachFile)`
  ${sharedIconStyle};
  margin-right: 0.5em;
  transform: rotate(-45deg);
  margin: 0.15em 0.25em;
`;
export const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 1em 1.2em;
  margin: 0 0.5em;
  border-radius: 20px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgb(21, 187, 238);
  }
`;
export const StyledMicIcon = styled(MicIcon)`
  ${sharedIconStyle};
`;

export const StyledSendIcon = styled(SendIcon)`
  ${sharedIconStyle};
`;
