import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { Drawer } from "@material-ui/core";
import { DrawerContainer } from "./SidebarDrawer.styles";
import { NewChat, CreateGroup, GroupInfo } from "..";

interface Props {
  isDrawer: boolean;
  toggleDrawer: () => void;
}

const SidebarDrawer = ({ isDrawer, toggleDrawer }: Props) => {
  const [step, setStep] = useState<number>(0);
  return (
    <>
      <Drawer variant="persistent" anchor="left" open={isDrawer} elevation={0}>
        <DrawerContainer>
          <SwipeableViews index={step}>
            <NewChat toggleDrawer={toggleDrawer} setStep={setStep} />
            <CreateGroup setStep={setStep} />
            <GroupInfo setStep={setStep} toggleDrawer={toggleDrawer} />
          </SwipeableViews>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
