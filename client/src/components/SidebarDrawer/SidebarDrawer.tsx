import React from "react";
import { Drawer } from "@material-ui/core";
import {
  DrawerContainer,
  DrawerHeader,
  DrawerTitle,
  StyledLeftArrowIcon,
} from "./SidebarDrawer.styles";

interface Props {
  isDrawer: boolean;
}

const SidebarDrawer = ({ isDrawer }: Props) => {
  return (
    <>
      <Drawer
        BackdropProps={{ invisible: true }}
        anchor="left"
        open={isDrawer}
        elevation={0}
      >
        <DrawerContainer>
          <DrawerHeader>
            <StyledLeftArrowIcon />
            <DrawerTitle>New chat</DrawerTitle>
          </DrawerHeader>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
