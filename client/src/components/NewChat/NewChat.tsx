import React from "react";
import {
  DrawerHeader,
  StyledLeftArrowIcon,
  DrawerTitle,
  StyledButton,
  ButtonCircle,
  StyledGroupAddIcon,
} from "../SidebarDrawer/SidebarDrawer.styles";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const NewChat = ({ setStep }: Props) => {
  return (
    <div>
      <DrawerHeader>
        <StyledLeftArrowIcon onClick={() => setStep((prev: any) => prev - 1)} />
        <DrawerTitle>Add group participants</DrawerTitle>
      </DrawerHeader>
      <StyledButton onClick={() => setStep((prev: any) => prev - 1)}>
        <ButtonCircle>
          <StyledGroupAddIcon />
        </ButtonCircle>
        <div
          style={{
            textTransform: "capitalize",
            fontSize: 17,
          }}
        >
          New group
        </div>
      </StyledButton>
    </div>
  );
};

export default NewChat;
