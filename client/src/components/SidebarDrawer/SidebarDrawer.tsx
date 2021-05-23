import React from "react";
import { Drawer } from "@material-ui/core";
import { DrawerContainer } from "./SidebarDrawer.styles";

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
        <DrawerContainer></DrawerContainer>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
