import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import ArrowForward from "@material-ui/icons/ArrowForward";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Contact } from "..";
import { setMembers } from "../../redux/slices/members.slice";
import {setStoredContacts, storedContactsSelector} from "../../redux/slices/storedContacts.slice";
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
  image?: string;
}

export interface ISetStep {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultContacts: IChip[] = [
  { id: 0, title: "Ali", image: "/static/images/coder.jpg" },
  { id: 1, title: "Arthur", image: "/static/images/coder.jpg" },
  { id: 2, title: "Marvin", image: "/static/images/coder.jpg" },
  { id: 3, title: "Jake", image: "/static/images/coder.jpg" },
  { id: 4, title: "Daniel", image: "/static/images/coder.jpg" },
  { id: 5, title: "Brian", image: "/static/images/coder.jpg" },
];

const CreateGroup = ({ setStep }: Pick<ISetStep, "setStep">) => {
  // const [storedContacts, setStoredContacts] = useState(defaultContacts);
  const [storedChips, setStoredChips] = useState<IChip[]>([]);
  const storedContacts = useSelector(storedContactsSelector)
  const dispatch = useDispatch();

  const handleDelete = (chip: IChip) => {
    const filteredChip = storedChips.filter(
      (item: IChip) => item.id !== chip.id
    );
    setStoredChips(filteredChip);
    // setStoredContacts((prev: IChip[]) => [...prev, chip]);
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
            label={chip.title}
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
      {storedContacts.map(({ id, title, image }: IChip) => (
        <Fragment key={id}>
          <Contact
            title={title}
            id={id}
            setStoredChips={setStoredChips}
            image={image}
          />
        </Fragment>
      ))}
      <SidebarFooterContainer>
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
