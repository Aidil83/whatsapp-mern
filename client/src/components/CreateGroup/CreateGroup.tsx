import { Chip, Fab } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
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
import {
  ChipsContainer,
  CreateGroupContainer,
  SidebarFooterContainer,
} from "./CreateGroup.styles";

export interface IChip {
  id: number;
  title: string;
}

export interface ISetStep {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  toggleDrawer?: () => void;
}

export const defaultContacts: IChip[] = [
  { id: 0, title: "Ali" },
  { id: 1, title: "Arthur" },
  { id: 2, title: "Marvin" },
  { id: 3, title: "Jake" },
  { id: 4, title: "Daniel" },
];

const CreateGroup = ({ setStep }: ISetStep) => {
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
    <CreateGroupContainer>
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
            style={{ width: "min-content", margin: ".5em 0 0 0" }}
          />
        ))}
      </ChipsContainer>
      <StyledButton disabled>
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
      <SidebarFooterContainer>
        {storedChips.length > 0 && (
          <Fab
            onClick={() => setStep((prev: number) => prev + 1)}
            size="medium"
            aria-label="next"
            style={{ backgroundColor: "#09E85E", color: "#fff" }}
          >
            <ArrowForward />
          </Fab>
        )}
      </SidebarFooterContainer>
    </CreateGroupContainer>
  );
};

export default CreateGroup;
