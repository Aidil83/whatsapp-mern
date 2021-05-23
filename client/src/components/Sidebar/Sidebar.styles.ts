import styled from "styled-components";
import { Container, ProfilePic } from "../Header/Header.styles";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import ChatIcon from "@material-ui/icons/Chat";
import { sharedIconStyle } from "../Footer/Footer.styles";

export const SidebarContainer = styled.div`
  width: 500px;
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
