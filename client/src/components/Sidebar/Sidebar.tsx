import React from "react";
import {
  MyProfilePic,
  SidebarContainer,
  SidebarHeader,
} from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarHeader>
          <MyProfilePic
            src=" https://source.unsplash.com/400x400/?face"
            width={50}
            height={50}
            objectFit="cover"
          />
        </SidebarHeader>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
