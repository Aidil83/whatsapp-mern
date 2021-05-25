import { Chip } from "@material-ui/core";
import React, { Fragment } from "react";
import { Contact } from "..";
import {
  DrawerHeader,
  StyledLeftArrowIcon,
  DrawerTitle,
  StyledButton,
  ButtonCircle,
  StyledAddPersonIcon,
} from "../SidebarDrawer/SidebarDrawer.styles";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const NewChat = ({ setStep }: Props) => {
  const handleDelete = () => {};

  const defaultTitle = [
    { title: "Ali" },
    { title: "Arthur" },
    { title: "Marvin" },
    { title: "Jake" },
    { title: "Daniel" },
  ];

  return (
    <div>
      <DrawerHeader>
        <StyledLeftArrowIcon
          onClick={() => setStep((prev: number) => prev - 1)}
        />
        <DrawerTitle>Add group participants</DrawerTitle>
      </DrawerHeader>
      <Chip size="small" onDelete={handleDelete} />
      <StyledButton>
        <ButtonCircle>
          <StyledAddPersonIcon />
        </ButtonCircle>
        <div
          style={{
            textTransform: "capitalize",
            fontSize: 17,
          }}
        >
          Add contact
        </div>
      </StyledButton>
      {defaultTitle.map((item, index) => {
        return (
          <Fragment key={index}>
            <Contact title={item.title} />;
          </Fragment>
        );
      })}
    </div>
  );
};

export default NewChat;
