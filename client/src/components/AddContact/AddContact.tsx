import styled from "styled-components";
import {
  DrawerHeader,
  DrawerTitle,
  StyledLeftArrowIcon,
} from "../SidebarDrawer/SidebarDrawer.styles";
import { StyledTextField } from "../GroupInfo/GroupInfo.styles";

interface Props {
  setIsContactDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddContact({ setIsContactDrawer, setIsDrawer }: Props) {
  return (
    <DrawerContainer>
      <DrawerHeader>
        <StyledLeftArrowIcon onClick={() => setIsContactDrawer(false)} />
        <DrawerTitle>Add Contact</DrawerTitle>
      </DrawerHeader>
      <DrawerBody>
        <form style={{ width: "80%" }}>
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
  padding: 1em;
`;
