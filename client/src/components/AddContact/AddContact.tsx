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
import { useState } from "react";
import { PhotoCamera } from "@material-ui/icons";

interface Props {
  setIsContactDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddContact({ setIsContactDrawer, setIsDrawer }: Props) {
  const [image, setImage] = useState<string | Blob>("");
  const [previewImage, setPreviewImage] = useState<string | Blob>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {};

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

  return (
    <DrawerContainer>
      <DrawerHeader>
        <StyledLeftArrowIcon onClick={() => setIsContactDrawer(false)} />
        <DrawerTitle>Add Contact</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>
        <CreateIconWrapper
          css={`
            height: 300px;
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
            name="Name"
            required
          />
        </form>
      </DrawerBody>
    </DrawerContainer>
  );
}

export default AddContact;

const DrawerContainer = styled.div`
  height: 100%;
`;
const DrawerBody = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
  padding: 1em;
  & form {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1em;
  }
`;
