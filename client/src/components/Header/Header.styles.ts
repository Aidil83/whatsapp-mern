import styled from "styled-components";
import Image from "next/image";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { sharedIconStyle } from "../Footer/Footer.styles";

export const Container = styled.header`
  height: 59px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ededed;
  padding: 0.5em;
  padding-left: 1.2em;
`;
export const ProfilePic = styled(Image)`
  border-radius: 50%;
`;
export const NameWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.75em;
  font-family: "segoe UI", Helvetica;
`;
export const TitleName = styled.h3`
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
`;
export const DescriptionName = styled.span`
  color: ${({ theme }) => theme.light};
`;
export const StyledSearchIcon = styled(SearchIcon)`
  ${sharedIconStyle};
`;
export const StyledMoreVertIcon = styled(MoreVertIcon)`
  ${sharedIconStyle};
`;
