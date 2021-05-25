import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { sharedIconStyle } from "../Footer/Footer.styles";

export const DrawerContainer = styled.div`
  min-width: 500px;
  width: 20vw;
  max-width: 500px;
  height: 100%;
  & .MuiButton-label {
    justify-content: flex-start;
    padding: 0;
    border-bottom: solid 1px ${({ theme }) => theme.lighter};
    height: 70px;
  }
`;
export const DrawerHeader = styled.div`
  height: 120px;
  display: flex;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.greenChat};
`;
export const StyledLeftArrowIcon = styled(ArrowBackIcon)`
  color: ${({ theme }) => theme.white};
  margin: 1em 0.6em 1em 1.2em;
  cursor: pointer;
`;
export const DrawerTitle = styled.h3`
  color: ${({ theme }) => theme.white};
  padding: 1em 0.5em 1.3em 0.6em;
`;
export const StyledButton = styled(Button)`
  width: 100%;
  height: 70px;
`;
export const ButtonCircle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  padding: 0.8em;
  margin: 1em;
  border-radius: 50%;
  background-color: #009688;
`;
export const StyledGroupAddIcon = styled(GroupAddIcon)`
  align-self: center;
  color: ${({ theme }) => theme.white};
`;
export const StyledAddPersonIcon = styled(PersonAddIcon)`
  color: ${({ theme }) => theme.white};
`;
