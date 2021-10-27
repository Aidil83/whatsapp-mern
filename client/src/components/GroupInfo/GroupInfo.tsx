import React, { useState } from "react";
import { ISetStep } from "../CreateGroup/CreateGroup";
import axios from "axios";
/* ------------------------------- Material UI ------------------------------ */
import PhotoCamera from "@material-ui/icons/ArrowForward";
/* ---------------------------------- Redux --------------------------------- */
import { useDispatch, useSelector } from "react-redux";
import {
  IGroupInfoStore,
  setGroupInfo,
} from "../../redux/slices/groupInfo.slice";
import {
  addTitle,
  membersSelector,
  resetImage,
} from "../../redux/slices/members.slice";
import { resetStoredContacts } from "../../redux/slices/storedContacts.slice";
import { resetChip } from "../../redux/slices/chip.slice";
import * as api from "../../api/wsApi";
/* ---------------------------- Styled components --------------------------- */
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

const defaultValues = {
  roomName: "",
  image: "",
  members: [{ name: "", image: "", nameColor: "" }],
};

const GroupInfo = ({ setStep, setIsDrawer }: ISetStep) => {
  const [image, setImage] = useState<string | Blob>("");
  const [previewImage, setPreviewImage] = useState<string | Blob>("");
  const [group, setGroup] = useState<IGroupInfoStore>(defaultValues);

  const { mutate } = api.usePostRoom();

  const data = useSelector(membersSelector); // Pull data from redux member slice.
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setGroup((prev) => ({
      ...prev,
      [e.target.name]: e.target.value || "",
    }));
    dispatch(addTitle(e.target.value));
  };

  const selectImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let selected = e?.target?.files?.[0];
    try {
      setImage(selected as string | Blob);
      setPreviewImage(URL.createObjectURL(selected));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "eyklpgtq");

    if (!previewImage) {
      mutate(data);
    } else {
      axios
        .post(
          "https://api.cloudinary.com/v1_1/aidil-inc/image/upload",
          formData
        )
        .then((res) => {
          const imageSelected: string = res.data.url;
          const addGroupImage: IGroupInfoStore = {
            ...data,
            image: imageSelected,
          };
          setGroup(addGroupImage);
          dispatch(setGroupInfo(addGroupImage));
          mutate({ ...data, image: imageSelected });
        })
        .catch((err) => {
          console.error(err);
        });
    }

    dispatch(resetStoredContacts());
    dispatch(resetChip());
    dispatch(resetImage());
    setImage("");
    setGroup(defaultValues);
    e.preventDefault();
    setTimeout(() => setStep(0), 250); // Wait for the drawer to close first.
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
            id="group-icon-button-file"
            type="file"
            onChange={selectImage}
          />
          <StyledLabel htmlFor="Group-icon-button-file" bgImage={previewImage}>
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
            name="roomName"
            required
          />
        </form>
      </CreateGroupWrapper>
    </CreateGroupContainer>
  );
};

export default GroupInfo;
