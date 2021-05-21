import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Container,
  DescriptionName,
  IconWrapper,
  NameWrapper,
  ProfilePic,
  // ProfilePic,
  TitleName,
} from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <ProfilePic src="/static/images/coder.jpg" width={50} height={50} />
      <NameWrapper>
        <TitleName>Coders</TitleName>
        <DescriptionName>Ali, Fitri, You</DescriptionName>
      </NameWrapper>
      <IconWrapper>
        <SearchIcon />
        <MoreVertIcon />
      </IconWrapper>
    </Container>
  );
};

export default Header;
