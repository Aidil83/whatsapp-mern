import React from "react";
import styled from "styled-components";
import { ProfilePic } from "../Header/Header.styles";
import {
  StyledButton,
  ButtonCircle,
} from "../SidebarDrawer/SidebarDrawer.styles";

interface Props {
  title: string;
}

const Contacts = ({ title }: Props) => {
  return (
    <StyledContactButton>
      <ProfilePic src="/static/images/coder.jpg" width={50} height={50} />
      <div
        style={{
          textTransform: "capitalize",
          fontSize: 17,
          padding: "0 1em",
        }}
      >
        {title}
      </div>
    </StyledContactButton>
  );
};

const StyledContactButton = styled(StyledButton)`
  & .MuiButton-label {
    padding-left: 1em;
  }
`;

export default Contacts;
