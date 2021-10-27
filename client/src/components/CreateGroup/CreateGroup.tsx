import Chip from "@material-ui/core/Chip";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "..";
import { useGetContact } from "../../api/wsApi";
import { chipSelector, setStoredChips } from "../../redux/slices/chip.slice";
import { setMembers } from "../../redux/slices/members.slice";
import {
  setStoredContacts,
  storedContactsSelector,
} from "../../redux/slices/storedContacts.slice";
import NextStepBtn from "../NextStepBtn/NextStepBtn";
import {
  DrawerHeader,
  StyledLeftArrowIcon,
  DrawerTitle,
  StyledButton,
  ButtonCircle,
  StyledAddPersonIcon,
} from "../SidebarDrawer/SidebarDrawer.styles";
import { ChipsContainer, CreateGroupContainer } from "./CreateGroup.styles";
import * as api from "../../api/wsApi";
import { IContact } from "../../interfaces/types";

export interface IChip {
  _id: string;
  name: string;
  image?: string;
  nameColor?: string;
}

export interface ISetStep {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setIsDrawer?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Props extends ISetStep {
  setIsContactDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateGroup = ({ setStep, setIsContactDrawer }: Props) => {
  const storedContacts = useSelector(storedContactsSelector);
  const storedChips = useSelector(chipSelector);
  const dispatch = useDispatch();
  const { isLoading, data } = api.useGetContact(dispatch);
  console.log(storedContacts);

  const handleDelete = (chip: IChip) => {
    const filteredChip = storedChips.filter(
      (item: IChip) => item._id !== chip._id
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
      <StyledButton onClick={() => setIsContactDrawer(true)}>
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
      {storedContacts.map((contact: IContact) => (
        <Fragment key={contact._id}>
          <Contact {...contact} />
        </Fragment>
      ))}
      {storedChips.length > 0 && (
        <NextStepBtn storedChips={storedChips} handleNextBtn={handleNextBtn} />
      )}
    </CreateGroupContainer>
  );
};

export default CreateGroup;
