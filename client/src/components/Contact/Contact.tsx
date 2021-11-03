import React from "react";
import { ProfilePic } from "../Header/Header.styles";
import { IChip } from "../CreateGroup/CreateGroup";
import { IContact } from "../../interfaces/types";
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
import randomColor from "randomcolor";

const Contact = ({ _id, name, image, about, email, phone }: IContact) => {
  const storedContacts = useSelector(storedContactsSelector);
  const dispatch = useDispatch();
  const nameColor = randomColor({
    luminosity: "dark",
    format: "rgba",
    alpha: 0.5,
  });
  const selectedContact = (contact: IChip) => {
    const filteredContacts: IChip[] = storedContacts.filter(
      (item: IChip): boolean => {
        return item._id !== contact._id;
      }
    );
    dispatch(filteredStoredContacts(filteredContacts));
    dispatch(addChip(contact));
  };
  return (
    <StyledContactButton
      onClick={() =>
        selectedContact({ _id, name, image, nameColor, about, email, phone })
      }
    >
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
        {name}
        {about && <SubText>{about}</SubText>}
        {!about && <SubText>Hey there! I am using Whatsapp.</SubText>}
      </div>
    </StyledContactButton>
  );
};

export default Contact;
