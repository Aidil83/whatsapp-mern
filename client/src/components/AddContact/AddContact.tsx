import React, { useState } from "react";
import styled from "styled-components";
import {
  DrawerHeader,
  DrawerTitle,
  StyledLeftArrowIcon,
} from "../SidebarDrawer/SidebarDrawer.styles";
import {
  CreateGroupWrapper as CreateIconWrapper,
  StyledLabel,
  StyledTextField,
  StyledUploadWrapper,
  UserIcon,
} from "../GroupInfo/GroupInfo.styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import NextStepBtn from "../../components/NextStepBtn/NextStepBtn";

interface IFieldValue {
  name: string;
  about: string;
  email: string;
  phone: string;
}

const DefaultFieldValue: IFieldValue = {
  name: "",
  about: "",
  email: "",
  phone: "",
};

interface Props {
  setIsContactDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddContact({ setIsContactDrawer, setIsDrawer }: Props) {
  const [image, setImage] = useState<string | Blob>("");
  const [previewImage, setPreviewImage] = useState<string | Blob>("");
  const [fieldValue, setFieldValue] = useState<IFieldValue>(DefaultFieldValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setFieldValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsDrawer(false);
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

  const handlePrevDrawer = (): void => {
    setFieldValue(DefaultFieldValue);
    setIsContactDrawer(false);
  };

  const handleNextBtn = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setFieldValue(DefaultFieldValue);
    setIsContactDrawer(false);
  };

  return (
    <DrawerContainer>
      <DrawerHeader>
        <StyledLeftArrowIcon onClick={handlePrevDrawer} />
        <DrawerTitle>Add Contact</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>
        <CreateIconWrapper
          css={`
            height: 100%;
            flex: 0.35;
          `}
        >
          <StyledUploadWrapper centerRipple>
            <input
              className="hide-input"
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={selectImage}
            />
            <StyledLabel htmlFor="icon-button-file" bgImage={previewImage}>
              <div className="profile-layer">
                <PhotoCamera />
                {!image && <div>ADD ICON</div>}
                {!image && <UserIcon />}
                {image && <div>CHANGE ICON</div>}
              </div>
            </StyledLabel>
          </StyledUploadWrapper>
        </CreateIconWrapper>
        <form>
          <StyledTextField
            variant="outlined"
            label="Enter Name"
            name="name"
            value={fieldValue.name}
            onChange={handleChange}
            required
          />
          <StyledTextField
            variant="outlined"
            label="Enter About"
            name="about"
            value={fieldValue.about}
            onChange={handleChange}
          />
          <StyledTextField
            variant="outlined"
            label="Enter Email"
            name="email"
            value={fieldValue.email}
            onChange={handleChange}
          />
          <StyledTextField
            variant="outlined"
            label="Enter Phone"
            name="phone"
            value={fieldValue.phone}
            onChange={handleChange}
          />
        </form>
        {fieldValue.name.length > 0 && (
          <NextStepBtn handleNextBtn={handleNextBtn} />
        )}
      </DrawerBody>
    </DrawerContainer>
  );
}

export default AddContact;

const DrawerContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.white};
`;
const DrawerBody = styled.div`
  height: calc(100% - 120px);
  width: 100%;
  display: flex;
  flex: 0.65;
  flex-direction: column;
  padding: 1em;
  overflow-y: auto;
  & form {
    flex: 0.5;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1em;
  }
`;
