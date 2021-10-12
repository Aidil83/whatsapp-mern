import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Drawer from "@material-ui/core/Drawer";
import { DrawerContainer } from "./SidebarDrawer.styles";
import { NewChat, CreateGroup, GroupInfo } from "..";
import AddContact from "../AddContact/AddContact";

interface Props {
  isDrawer: boolean;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarDrawer = ({ isDrawer, setIsDrawer }: Props) => {
  const [step, setStep] = useState<number>(0);
  const [stepContact, setStepContact] = useState<number>(0);
  const [isContactDrawer, setIsContactDrawer] = useState<boolean>(false);

  return (
    <>
      <Drawer variant="persistent" anchor="left" open={isDrawer} elevation={0}>
        <DrawerContainer>
          <SwipeableViews index={step}>
            <NewChat setIsDrawer={setIsDrawer} setStep={setStep} />
            <CreateGroup
              setStep={setStep}
              setIsContactDrawer={setIsContactDrawer}
            />
            <GroupInfo setStep={setStep} setIsDrawer={setIsDrawer} />
          </SwipeableViews>
          <Drawer
            variant="persistent"
            anchor="left"
            open={isContactDrawer}
            elevation={0}
          >
            <SwipeableViews
              index={stepContact}
              style={{
                minWidth: 500,
                width: "20vw",
                maxWidth: 500,
                height: "100%",
              }}
            >
              <AddContact
                setIsContactDrawer={setIsContactDrawer}
                setIsDrawer={setIsDrawer}
              />
            </SwipeableViews>
          </Drawer>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
