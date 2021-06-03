import React from "react";
import { ProfilePic } from "../Header/Header.styles";
import { IChip as IContact } from "../CreateGroup/CreateGroup";
import {
  StyledContactButton,
  SubText,
} from "../CreateGroup/CreateGroup.styles";

interface Props {
  id: number;
  title: string;
  image: string | undefined;
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
  image,
  storedContacts,
  setStoredContacts,
  setStoredChips,
}: Props) => {
  const removeContact = (contact: IContact) => {
    const filteredContacts = storedContacts.filter(
      (item) => item.id !== contact.id
    );
    setStoredContacts(filteredContacts);
    setStoredChips((prev: IContact[]) => [...prev, contact]);
  };
  return (
    <StyledContactButton onClick={() => removeContact({ id, title, image })}>
      <ProfilePic
        src={image || ""}
        width={50}
        height={50}
        alt="profile-image"
      />
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

export default Contacts;
