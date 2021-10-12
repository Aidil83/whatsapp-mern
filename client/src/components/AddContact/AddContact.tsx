import {
  DrawerHeader,
  DrawerTitle,
  StyledLeftArrowIcon,
} from "../SidebarDrawer/SidebarDrawer.styles";

interface Props {
  setIsContactDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddContact({ setIsContactDrawer, setIsDrawer }: Props) {
  return (
    <DrawerHeader>
      <StyledLeftArrowIcon onClick={() => setIsContactDrawer(false)} />
      <DrawerTitle>Add Contact</DrawerTitle>
    </DrawerHeader>
  );
}

export default AddContact;
