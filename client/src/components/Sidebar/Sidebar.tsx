import React from "react";
import { StyledMoreVertIcon } from "../Header/Header.styles";
import {
  MyProfilePic,
  SidebarContainer,
  SidebarHeader,
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
          <StyledStatusIcon />
          <StyledChatIcon />
          <StyledMoreVertIcon />
        </SidebarHeader>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
