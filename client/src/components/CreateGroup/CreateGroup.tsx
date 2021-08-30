import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import ArrowForward from "@material-ui/icons/ArrowForward";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "..";
import { chipSelector, setStoredChips } from "../../redux/slices/chip.slice";
import { setMembers } from "../../redux/slices/members.slice";
import {
  setStoredContacts,
  storedContactsSelector,
} from "../../redux/slices/storedContacts.slice";
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
  name: string;
  image?: string;
  nameColor: string;
}

export interface ISetStep {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

// export const defaultContacts: IChip[] = [
//   { id: 0, name: "Ali", image: "" },
//   { id: 1, name: "Arthur", image: "" },
//   { id: 2, name: "Marvin", image: "" },
//   { id: 3, name: "Jake", image: "" },
//   { id: 4, name: "Daniel", image: "" },
//   { id: 5, name: "Brian", image: "" },
// ];

const CreateGroup = ({ setStep }: Pick<ISetStep, "setStep">) => {
  const storedContacts = useSelector(storedContactsSelector);
  const storedChips = useSelector(chipSelector);
  const dispatch = useDispatch();

  const handleDelete = (chip: IChip) => {
    const filteredChip = storedChips.filter(
      (item: IChip) => item.id !== chip.id
    );
    // remove chip.
    dispatch(setStoredChips(filteredChip));
    // Restore contact.
    dispatch(setStoredContacts(chip));
  };

  const handleNextBtn = (): void => {
    dispatch(setMembers(storedChips));
    setStep((prev: number) => prev + 1);
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
        {storedChips.map((chip: IChip, idx) => (
          <Chip
            size="small"
            label={chip.name}
            onDelete={() => handleDelete(chip)}
            style={{ width: "min-content", margin: ".5em 0 0 0" }}
            key={idx}
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
      {storedContacts.map(({ id, name, image }: IChip) => (
        <Fragment key={id}>
          <Contact name={name} id={id} image={image} />
        </Fragment>
      ))}
      <SidebarFooterContainer>
        {/* NOTE: display button if length is greater than 0 */}
        {storedChips.length > 0 && (
          <Fab
            onClick={handleNextBtn}
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
