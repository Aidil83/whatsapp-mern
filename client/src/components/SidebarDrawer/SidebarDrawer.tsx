import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
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
  const [step, setStep] = useState(0);
  return (
    <>
      <Drawer variant="persistent" anchor="left" open={isDrawer} elevation={0}>
        <DrawerContainer>
          <SwipeableViews index={step}>
            <div>
              <DrawerHeader>
                <StyledLeftArrowIcon onClick={toggleDrawer} />
                <DrawerTitle>Old chat</DrawerTitle>
              </DrawerHeader>
              <StyledButton onClick={() => setStep((prev) => prev + 1)}>
                <ButtonCircle>
                  <StyledGroupAddIcon />
                </ButtonCircle>
                <div
                  style={{
                    textTransform: "capitalize",
                    fontSize: 17,
                  }}
                >
                  old group
                </div>
              </StyledButton>
            </div>
            <div>
              <DrawerHeader>
                <StyledLeftArrowIcon onClick={toggleDrawer} />
                <DrawerTitle>New chat</DrawerTitle>
              </DrawerHeader>
              <StyledButton onClick={() => setStep((prev) => prev + 1)}>
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
          </SwipeableViews>
        </DrawerContainer>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
