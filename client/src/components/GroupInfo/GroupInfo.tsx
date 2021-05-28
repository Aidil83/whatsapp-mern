import { PhotoCamera } from "@material-ui/icons";
import Image from "next/image";
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
  StyledLabel,
  StyledUploadWrapper,
} from "./GroupInfo.styles";

const GroupInfo = ({ setStep }: ISetStep) => {
  const [image, setImage] = useState<any>(null);

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let selected = e?.target?.files?.[0];
    console.log(selected);
    setImage(URL.createObjectURL(selected));
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
            accept="image/gif,image/jpeg,image/jpg,image/png"
            id="icon-button-file"
            type="file"
            onChange={fileHandler}
          />
          <StyledLabel htmlFor="icon-button-file" bgImage={image}>
            {!image && <PhotoCamera />}
          </StyledLabel>
          {/* {image && <img src={image} width={200} height={200} />} */}
        </StyledUploadWrapper>
      </CreateGroupWrapper>
    </CreateGroupContainer>
  );
};

export default GroupInfo;
