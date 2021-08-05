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
  /* position: revert; */
  opacity: 1;
  background-color: rgb(160 160 160 / 90%);
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
