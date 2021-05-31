import IconButton from "@material-ui/core/IconButton";
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
      <IconButton size="small">
        <StyledSmileIcons />
      </IconButton>
      <IconButton size="small">
        <StyledClipIcons />
      </IconButton>
      <StyledInput placeholder="Type a message..." />
      <IconButton>
        <StyledMicIcon />
      </IconButton>
    </FooterContainer>
  );
};

export default Footer;
