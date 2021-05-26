import React from "react";
import styled from "styled-components";
import { ProfilePic } from "../Header/Header.styles";
import { StyledButton } from "../SidebarDrawer/SidebarDrawer.styles";
import { IChip } from "../NewChat/NewChat";

interface Props {
  id: number;
  title: string;
  storedContacts: {
    id: number;
    title: string;
  }[];
  setStoredContacts: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
      }[]
    >
  >;
  setStoredChips: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
      }[]
    >
  >;
}

const Contacts = ({
  id,
  title,
  storedContacts,
  setStoredContacts,
  setStoredChips,
}: Props) => {
  const removeContact = (id: number) => {
    const filteredContacts = storedContacts.filter((item) => item.id !== id);
    setStoredContacts(filteredContacts);
    setStoredChips((prev: IChip[]) => [...prev, { id, title }]);
  };

  return (
    <StyledContactButton onClick={() => removeContact(id)}>
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
