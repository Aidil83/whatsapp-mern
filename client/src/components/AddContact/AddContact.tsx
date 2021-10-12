import {
  DrawerHeader,
  DrawerTitle,
  StyledLeftArrowIcon,
} from "../SidebarDrawer/SidebarDrawer.styles";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setIsDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddContact({ setStep, setIsDrawer }: Props) {
  return (
    <DrawerHeader>
      <StyledLeftArrowIcon
        onClick={() => setStep((prev: number) => prev - 2)}
      />
      <DrawerTitle>Add Contact</DrawerTitle>
    </DrawerHeader>
  );
}

export default AddContact;
