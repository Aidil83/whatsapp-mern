import { PhotoCamera } from "@material-ui/icons";
import React, { useState } from "react";
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
  StyledUploadWrapper,
} from "./GroupInfo.styles";

const GroupInfo = ({ setStep }: ISetStep) => {
  const [image, setImage] = useState<string | null>(null);

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let selected = e?.target?.files?.[0];
    try {
      setImage(URL.createObjectURL(selected));
    } catch (error) {
      console.log(error);
    }
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
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={fileHandler}
          />
          <StyledLabel htmlFor="icon-button-file" bgImage={image}>
            {!image && (
              <>
                <GroupIcon />
                <div className="profile-layer">
                  <PhotoCamera />
                  <div>ADD GROUP ICON</div>
                </div>
              </>
            )}
          </StyledLabel>
        </StyledUploadWrapper>
      </CreateGroupWrapper>
    </CreateGroupContainer>
  );
};

export default GroupInfo;
