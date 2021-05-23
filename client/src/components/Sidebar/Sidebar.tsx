import { IconButton } from "@material-ui/core";
import React from "react";
import { StyledMoreVertIcon } from "../Header/Header.styles";
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
  return (
    <>
      <SidebarContainer>
        <SidebarHeader>
          <MyProfilePic
            src=" https://source.unsplash.com/random/200x200/"
            width={40}
            height={40}
            objectFit="cover"
          />
          <SidebarHeaderRight>
            <IconButton>
              <StyledStatusIcon />
            </IconButton>
            <IconButton>
              <StyledChatIcon />
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
