import React from "react";
import {
  Container,
  DescriptionName,
  NameWrapper,
  ProfilePic,
  TitleName,
  StyledSearchIcon,
  StyledMoreVertIcon,
} from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <ProfilePic src="/static/images/coder.jpg" width={50} height={50} />
      <NameWrapper>
        <TitleName>Coders</TitleName>
        <DescriptionName>Ali, Fitri, You</DescriptionName>
      </NameWrapper>
      <StyledSearchIcon />
      <StyledMoreVertIcon />
    </Container>
  );
};

export default Header;
