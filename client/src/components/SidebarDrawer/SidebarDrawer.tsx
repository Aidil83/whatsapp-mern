import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import Drawer from "@mui/material/Drawer";
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
      <Drawer
        variant="persistent"
        open={isDrawer}
        elevation={0}
        anchor="left"
        PaperProps={{ style: { position: "absolute", overflow: "hidden" } }}
      >
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
            <DrawerContainer>
              <SwipeableViews
                index={stepContact}
                style={{ height: "100%" }}
                slideStyle={{ height: "100%" }}
                containerStyle={{ height: "100%" }}
              >
                <AddContact
                  setIsContactDrawer={setIsContactDrawer}
                  setIsDrawer={setIsDrawer}
                />
              </SwipeableViews>
            </DrawerContainer>
          </Drawer>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
