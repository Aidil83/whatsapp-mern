import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const DrawerContainer = styled.div`
  min-width: 500px;
  width: 20vw;
  max-width: 500px;
  height: 100%;
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
