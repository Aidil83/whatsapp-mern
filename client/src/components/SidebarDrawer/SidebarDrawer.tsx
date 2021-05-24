import React from "react";
import { Drawer } from "@material-ui/core";
import {
  ButtonCircle,
  DrawerContainer,
  DrawerHeader,
  DrawerTitle,
  StyledButton,
  StyledGroupAddIcon,
  StyledLeftArrowIcon,
} from "./SidebarDrawer.styles";

interface Props {
  isDrawer: boolean;
  toggleDrawer: any;
}

const SidebarDrawer = ({ isDrawer, toggleDrawer }: Props) => {
  return (
    <>
      <Drawer variant="persistent" anchor="left" open={isDrawer} elevation={0}>
        <DrawerContainer>
          <DrawerHeader>
            <StyledLeftArrowIcon onClick={toggleDrawer} />
            <DrawerTitle>New chat</DrawerTitle>
          </DrawerHeader>
          <StyledButton>
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
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
