import { ButtonBase } from "@material-ui/core";
import styled from "styled-components";
import { FooterContainer } from "../Footer/Footer.styles";
import { StyledButton } from "../SidebarDrawer/SidebarDrawer.styles";

export const CreateGroupContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.sidebarGray};
`;
export const ChipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-left: 1.5em;
`;
export const SidebarFooterContainer = styled(FooterContainer)`
  position: absolute;
  bottom: 0;
`;
export const StyledContactButton = styled(StyledButton)`
  & .MuiButton-label {
    padding-left: 1em;
  }
`;
export const SubText = styled.div`
  color: ${({ theme }) => theme.light};
  font-size: 13px;
  font-family: "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial;
  font-weight: 400;
  text-transform: none;
`;