import { IconButton } from "@material-ui/core";
import React, { useState } from "react";
import { StyledMoreVertIcon } from "../Header/Header.styles";
import SidebarDrawer from "../SidebarDrawer/SidebarDrawer";
import {
  InputSection,
  MyProfilePic,
  PaneSide,
  SidebarContainer,
  SidebarHeader,
  SidebarHeaderRight,
  SidebarSearchIcon,
  StyledChatIcon,
  StyledStatusIcon,
} from "./Sidebar.styles";

const Sidebar = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawer(!isDrawer);
  };

  return (
    <>
      <SidebarDrawer isDrawer={isDrawer} />
      <SidebarContainer>
        <SidebarHeader>
          <MyProfilePic
            src="/static/images/coder.jpg"
            width={40}
            height={40}
            objectFit="cover"
            alt="my-profile"
          />
          <SidebarHeaderRight>
            <IconButton>
              <StyledStatusIcon />
            </IconButton>
            <IconButton>
              <StyledChatIcon onClick={toggleDrawer} />
            </IconButton>
            <IconButton>
              <StyledMoreVertIcon />
            </IconButton>
          </SidebarHeaderRight>
        </SidebarHeader>
        <InputSection>
          <PaneSide>
            <SidebarSearchIcon />
            <input placeholder="Search or start new chat..." />
          </PaneSide>
        </InputSection>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
