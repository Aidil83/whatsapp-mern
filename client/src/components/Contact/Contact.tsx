import React from "react";
import {
  StyledButton,
  ButtonCircle,
  StyledGroupAddIcon,
  StyledAddPersonIcon,
} from "../SidebarDrawer/SidebarDrawer.styles";

const Contacts = () => {
  return (
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
  );
};

export default Contacts;
