import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
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
import { useRouter } from "next/dist/client/router";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const Sidebar = () => {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  // const groupInfoData = useSelector(groupInfoSelector);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const router = useRouter();

  const { data, isLoading } = useQuery("rooms", api.getRooms);

  const options = ["Profile", "My account", "Sign in"];

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id: number) => {
    if (id === 2) {
      router.push(`/login`);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <SidebarDrawer isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
      <SidebarContainer>
        <SidebarHeader>
          <MyProfilePic
            onClick={handleClick}
            src="/static/images/coder.jpg"
            width={40}
            height={40}
            alt="my-profile"
          />
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={() => handleClose(0)}>Profile</MenuItem>
            <MenuItem onClick={() => handleClose(1)}>My account</MenuItem>
            <MenuItem onClick={() => handleClose(2)}>Sign in</MenuItem>
          </Menu>
          <SidebarHeaderRight>
            <IconButton onClick={() => router.push("/")}>
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
          data?.map((item: any, id: number) => (
            <SidebarChat item={item} key={id} id={id} />
          ))}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
