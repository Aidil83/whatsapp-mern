import styled from "styled-components";
import { StyledContactButton } from "../../CreateGroup/CreateGroup.styles";
import { GroupIcon } from "../../GroupInfo/GroupInfo.styles";

export const StyledContact = styled(StyledContactButton)`
  &.MuiButton-root {
    display: flex;
    justify-content: start;
  }
`;

export const DefaultImage = styled(GroupIcon)`
  position: revert;
  opacity: 1;
  background-color: gray;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 5em;
`;
