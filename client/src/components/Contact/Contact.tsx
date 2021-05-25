import React from "react";
import styled from "styled-components";
import { ProfilePic } from "../Header/Header.styles";
import { StyledButton } from "../SidebarDrawer/SidebarDrawer.styles";

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
          textAlign: "left",
        }}
      >
        {title}
        <SubText>Hey there! I am using Whatsapp.</SubText>
      </div>
    </StyledContactButton>
  );
};

export const StyledContactButton = styled(StyledButton)`
  & .MuiButton-label {
    padding-left: 1em;
  }
`;
export const SubText = styled.div`
  color: ${({ theme }) => theme.light};
  font-size: 13px;
  font-family: "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial;
  font-weight: 400;
  text-transform: none;
`;

export default Contacts;
