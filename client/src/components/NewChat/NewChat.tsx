import { Chip } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { Contact } from "..";
import {
  DrawerHeader,
  StyledLeftArrowIcon,
  DrawerTitle,
  StyledButton,
  ButtonCircle,
  StyledAddPersonIcon,
} from "../SidebarDrawer/SidebarDrawer.styles";

export const defaultContacts = [
  { id: 0, title: "Ali" },
  { id: 1, title: "Arthur" },
  { id: 2, title: "Marvin" },
  { id: 3, title: "Jake" },
  { id: 4, title: "Daniel" },
];

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const NewChat = ({ setStep }: Props) => {
  const [storedContacts, setStoredContacts] = useState(defaultContacts);
  return (
    <div>
      <DrawerHeader>
        <StyledLeftArrowIcon
          onClick={() => setStep((prev: number) => prev - 1)}
        />
        <DrawerTitle>Add group participants</DrawerTitle>
      </DrawerHeader>
      <Chip size="small" />
      <StyledButton>
        <ButtonCircle>
          <StyledAddPersonIcon />
        </ButtonCircle>
        <div
          style={{
            textTransform: "capitalize",
            fontSize: 17,
          }}
        >
          Add contact
        </div>
      </StyledButton>
      {storedContacts.map(({ title, id }) => (
        <Fragment key={id}>
          <Contact
            title={title}
            id={id}
            storedContacts={storedContacts}
            setStoredContacts={setStoredContacts}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default NewChat;
