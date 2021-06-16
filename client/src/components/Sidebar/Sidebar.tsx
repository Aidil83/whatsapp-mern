import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SidebarDrawer } from "..";
import { groupInfoSelector } from "../../redux/slices/groupInfo.slice";
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
import SidebarChat from "./SidebarChat/SidebarChat";

const Sidebar = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const data = useSelector(groupInfoSelector);
  console.log("<data>", data);

  return (
    <>
      <SidebarDrawer isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
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
            <IconButton onClick={() => setIsDrawer(true)}>
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
        {data.map((item, idx) => (
          <SidebarChat item={item} key={idx} />
        ))}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
