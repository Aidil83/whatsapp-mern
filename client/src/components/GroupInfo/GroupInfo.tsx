import { Fab } from "@material-ui/core";
import { ArrowForward, PhotoCamera } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { ISetStep } from "../CreateGroup/CreateGroup";
import { CreateGroupContainer } from "../CreateGroup/CreateGroup.styles";
import {
  DrawerHeader,
  StyledLeftArrowIcon,
  DrawerTitle,
} from "../SidebarDrawer/SidebarDrawer.styles";
import {
  CreateGroupWrapper,
  GroupIcon,
  StyledLabel,
  StyledTextField,
  StyledUploadWrapper,
} from "./GroupInfo.styles";

const GroupInfo = ({ setStep, setIsDrawer }: ISetStep) => {
  const [image, setImage] = useState<string | null>(null);

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let selected = e?.target?.files?.[0];
    try {
      setImage(URL.createObjectURL(selected));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLastStep = () => {
    setTimeout(() => setStep(0), 250);
    setIsDrawer(false);
  };

  return (
    <CreateGroupContainer>
      <DrawerHeader>
        <StyledLeftArrowIcon
          onClick={() => setStep((prev: number) => prev - 1)}
        />
        <DrawerTitle>New group</DrawerTitle>
      </DrawerHeader>
      <CreateGroupWrapper>
        <StyledUploadWrapper centerRipple>
          <input
            className="hide-input"
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={fileHandler}
          />
          <StyledLabel htmlFor="icon-button-file" bgImage={image}>
            <div className="profile-layer">
              <PhotoCamera />
              {!image && <div>ADD GROUP ICON</div>}
              {!image && <GroupIcon />}
              {image && <div>CHANGE GROUP ICON</div>}
            </div>
          </StyledLabel>
        </StyledUploadWrapper>
        <form style={{ width: "80%" }}>
          <StyledTextField label="Group Subject" />
        </form>
        <Fab
          onClick={handleLastStep}
          size="medium"
          aria-label="next"
          style={{
            backgroundColor: "#09E85E",
            color: "#fff",
            marginTop: "5em",
          }}
        >
          <ArrowForward />
        </Fab>
      </CreateGroupWrapper>
    </CreateGroupContainer>
  );
};

export default GroupInfo;
