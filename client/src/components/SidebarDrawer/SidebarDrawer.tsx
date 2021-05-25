import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Drawer } from "@material-ui/core";
import { DrawerContainer } from "./SidebarDrawer.styles";
import NewGroup from "../NewGroup/NewGroup";
import NewChat from "../NewChat/NewChat";

interface Props {
  isDrawer: boolean;
  toggleDrawer: any;
}

const SidebarDrawer = ({ isDrawer, toggleDrawer }: Props) => {
  const [step, setStep] = useState<number>(0);
  return (
    <>
      <Drawer variant="persistent" anchor="left" open={isDrawer} elevation={0}>
        <DrawerContainer>
          <SwipeableViews index={step}>
            <NewGroup toggleDrawer={toggleDrawer} setStep={setStep} />
            <NewChat setStep={setStep} />
          </SwipeableViews>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
