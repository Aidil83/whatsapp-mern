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
  toggleDrawer: any;
  setStep: any;
}

const NewChat = ({ toggleDrawer, setStep }: Props) => {
  return (
    <div>
      <DrawerHeader>
        <StyledLeftArrowIcon onClick={toggleDrawer} />
        <DrawerTitle>New chat</DrawerTitle>
      </DrawerHeader>
      <StyledButton onClick={() => setStep((prev: number) => prev + 1)}>
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
