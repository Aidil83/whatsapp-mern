import React from "react";
import { ProfilePic } from "../Header/Header.styles";
import { IChip as IContact } from "../CreateGroup/CreateGroup";
import {
  StyledContactButton,
  SubText,
} from "../CreateGroup/CreateGroup.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredStoredContacts,
  storedContactsSelector,
} from "../../redux/slices/storedContacts.slice";
import { addChip } from "../../redux/slices/chip.slice";

interface Props {
  id: number;
  title: string;
  image: string | undefined;
}

const Contacts = ({ id, title, image }: Props) => {
  const storedContacts = useSelector(storedContactsSelector);
  const dispatch = useDispatch();

  const removeContact = (contact: IContact) => {
    const filteredContacts = storedContacts.filter((item) => {
      return item.id !== contact.id;
    });
    dispatch(filteredStoredContacts(filteredContacts));
    dispatch(addChip(contact));
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
