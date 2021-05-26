import styled from "styled-components";
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

export interface IChip {
  id: number;
  title: string;
}

export const defaultContacts: IChip[] = [
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
  const [storedChips, setStoredChips] = useState<IChip[]>([]);

  const handleDelete = (chip: IChip) => {
    const filteredChip = storedChips.filter(
      (item: IChip) => item.id !== chip.id
    );
    setStoredChips(filteredChip);
    setStoredContacts((prev: IChip[]) => [...prev, chip]);
  };

  return (
    <div>
      <DrawerHeader>
        <StyledLeftArrowIcon
          onClick={() => setStep((prev: number) => prev - 1)}
        />
        <DrawerTitle>Add group participants</DrawerTitle>
      </DrawerHeader>
      <ChipsContainer>
        {storedChips.map((chip: IChip) => (
          <Chip
            size="small"
            label={chip.title}
            onDelete={() => handleDelete(chip)}
            style={{ width: "min-content", margin: ".2em 0" }}
          />
        ))}
      </ChipsContainer>
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
      {storedContacts.map(({ id, title }) => (
        <Fragment key={id}>
          <Contact
            title={title}
            id={id}
            storedContacts={storedContacts}
            setStoredContacts={setStoredContacts}
            setStoredChips={setStoredChips}
          />
        </Fragment>
      ))}
    </div>
  );
};

const ChipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 1em 0 0.5em 1.5em;
`;

export default NewChat;
