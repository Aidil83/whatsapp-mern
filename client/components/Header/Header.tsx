import React from "react";
import {
  Container,
  DescriptionName,
  IconWrapper,
  NameWrapper,
  ProfilePic,
  TitleName,
} from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <ProfilePic />
      <NameWrapper>
        <TitleName>Coders</TitleName>
        <DescriptionName>Ali, Fitri, You</DescriptionName>
      </NameWrapper>
      <IconWrapper></IconWrapper>
    </Container>
  );
};

export default Header;
