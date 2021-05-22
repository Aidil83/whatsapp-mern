import styled, { css } from "styled-components";
import { InsertEmoticon, AttachFile } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";

export const sharedIconStyle = css`
  color: ${({ theme }) => theme.light};
  margin: 0 0.25em;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.medium};
  }
`;
export const FooterContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.lighter};
  padding: 0 0.5em;
`;
export const StyledSmileIcons = styled(InsertEmoticon)`
  ${sharedIconStyle};
`;
export const StyledClipIcons = styled(AttachFile)`
  ${sharedIconStyle};
  margin-right: 0.5em;
  transform: rotate(-45deg);
`;
export const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 0.7em 0.6em;
  border-radius: 20px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgb(21, 187, 238);
  }
`;
export const StyledMicIcon = styled(MicIcon)`
  ${sharedIconStyle};
  margin-left: 0.5em;
`;
