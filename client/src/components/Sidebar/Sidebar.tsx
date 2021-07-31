import IconButton from "@material-ui/core/IconButton";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SidebarDrawer } from "..";
import {
  groupInfoSelector,
  loadGroupInfo,
  setGroupInfo,
} from "../../redux/slices/groupInfo.slice";
import { StyledMoreVertIcon } from "../Header/Header.styles";
import * as api from "../../api/wsApi";
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
import { useQuery } from "react-query";

const Sidebar = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  // const groupInfoData = useSelector(groupInfoSelector);

  const { data, isLoading } = useQuery("rooms", api.getRooms);

  return (
    <>
      <SidebarDrawer isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
      <SidebarContainer>
        <SidebarHeader>
          <MyProfilePic
            src="/static/images/coder.jpg"
            width={40}
            height={40}
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
        {!isLoading &&
          data.map((item: any, id: number) => (
            <SidebarChat item={item} key={id} id={id} />
          ))}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
