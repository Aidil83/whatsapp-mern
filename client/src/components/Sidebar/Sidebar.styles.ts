import styled from "styled-components";
import {
  Container,
  ProfilePic,
  StyledSearchIcon,
} from "../Header/Header.styles";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import ChatIcon from "@material-ui/icons/Chat";
import { sharedIconStyle } from "../Footer/Footer.styles";

export const SidebarContainer = styled.div`
  min-width: 500px;
  width: 20vw;
  max-width: 500px;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
  overflow: auto;
  border-right: solid 1px ${({ theme }) => theme.gray500};
`;
export const SidebarHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding-left: 1em;
`;
export const MyProfilePic = styled(ProfilePic)`
  cursor: pointer;
`;
export const SidebarHeaderRight = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-end;
`;
export const StyledStatusIcon = styled(DataUsageIcon)`
  ${sharedIconStyle};
`;
export const StyledChatIcon = styled(ChatIcon)`
  ${sharedIconStyle};
`;
export const InputSection = styled(SidebarHeader)`
  background-color: #f6f6f6;
`;
export const PaneSide = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0.3em 0.6em;
  margin: 0 0.5em;
  border-radius: 20px;
  border: none;
  background-color: ${({ theme }) => theme.white};
  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgb(21, 187, 238);
  }
  & input {
    border: none;
    padding: 0.25em 2em 0.25em 1em;
    &:focus {
      outline: none;
    }
  }
`;
export const SidebarSearchIcon = styled(StyledSearchIcon)`
  &:hover {
    color: ${({ theme }) => theme.medium};
    cursor: pointer;
  }
`;
