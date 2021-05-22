import styled from "styled-components";
import { Container, ProfilePic } from "../Header/Header.styles";

export const SidebarContainer = styled.div`
  width: 500px;
  height: 100%;
  background-color: ${({ theme }) => theme.white};
  overflow: auto;
  border-right: solid 1px ${({ theme }) => theme.gray500};
`;
export const SidebarHeader = styled(Container)``;
export const MyProfilePic = styled(ProfilePic)``;
