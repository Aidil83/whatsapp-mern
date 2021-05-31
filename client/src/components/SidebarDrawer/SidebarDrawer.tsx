import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Drawer from "@material-ui/core/Drawer";
import { DrawerContainer } from "./SidebarDrawer.styles";
import { NewChat, CreateGroup, GroupInfo } from "..";

interface Props {
  isDrawer: boolean;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarDrawer = ({ isDrawer, setIsDrawer }: Props) => {
  const [step, setStep] = useState<number>(0);

  return (
    <>
      <Drawer variant="persistent" anchor="left" open={isDrawer} elevation={0}>
        <DrawerContainer>
          <SwipeableViews index={step}>
            <NewChat setIsDrawer={setIsDrawer} setStep={setStep} />
            <CreateGroup setStep={setStep} />
            <GroupInfo setStep={setStep} setIsDrawer={setIsDrawer} />
          </SwipeableViews>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
