import React from "react";
import {
  FooterContainer,
  StyledClipIcons,
  StyledInput,
  StyledMicIcon,
  StyledSmileIcons,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <StyledSmileIcons />
      <StyledClipIcons />
      <StyledInput placeholder="Type a message..." />
      <StyledMicIcon />
    </FooterContainer>
  );
};

export default Footer;
