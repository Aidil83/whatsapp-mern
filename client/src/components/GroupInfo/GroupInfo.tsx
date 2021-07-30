import React, { useEffect, useState } from "react";
import { ISetStep } from "../CreateGroup/CreateGroup";
/* Material UI */
import PhotoCamera from "@material-ui/icons/ArrowForward";
/* Redux */
import { useDispatch, useSelector } from "react-redux";
import {
  IGroupInfoStore,
  setGroupInfo,
} from "../../redux/slices/groupInfo.slice";
/* Styled components */
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
import {
  addImage,
  addTitle,
  membersSelector,
  resetImage,
} from "../../redux/slices/members.slice";
import { resetStoredContacts } from "../../redux/slices/storedContacts.slice";
import { resetChip } from "../../redux/slices/chip.slice";
import * as api from "../../api/wsApi";

const defaultValues = {
  roomName: "",
  image: "",
  members: [{ id: 1, name: "", image: "" }],
};

const GroupInfo = ({ setStep, setIsDrawer }: ISetStep) => {
  const [image, setImage] = useState<string | null>(null);
  const [group, setGroup] = useState<IGroupInfoStore>(defaultValues);
  const data = useSelector(membersSelector); // Pull data from redux member slice.
  const dispatch = useDispatch();

  // useEffect(() => {
  //   api.getRooms;
  // }, []);

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let selected = e?.target?.files?.[0];
    try {
      setImage(URL.createObjectURL(selected));
      dispatch(addImage(URL.createObjectURL(selected)));
      setGroup({
        ...group,
        image: URL.createObjectURL(selected) || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setGroupInfo(data));
    dispatch(resetStoredContacts());
    dispatch(resetChip());
    dispatch(resetImage());
    setImage("");
    setGroup(defaultValues);
    setTimeout(() => setStep(0), 250); // Wait for the drawer to close first.
    setIsDrawer(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setGroup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value || "",
    }));
    dispatch(addTitle(e.target.value));
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
        <form style={{ width: "80%" }} onSubmit={handleSubmit}>
          <StyledTextField
            value={group.roomName}
            label="Group Subject"
            onChange={handleChange}
            name="title"
            required
          />
        </form>
      </CreateGroupWrapper>
    </CreateGroupContainer>
  );
};

export default GroupInfo;
