import React, { useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useSelector } from "react-redux";
import { clickChatSelector } from "../../redux/slices/clickChat.slice";
import { IChip } from "../CreateGroup/CreateGroup";
import { DefaultImage } from "../Sidebar/SidebarChat/SidebarChat.styles";
import GroupAvatars from "./GroupAvatars/GroupAvatars";
import Avatar from "@mui/material/Avatar";
import {
  Container,
  DescriptionName,
  NameWrapper,
  StyledMoreVertIcon,
  TitleName,
} from "./Header.styles";
import Searchbox from "./Searchbox/Searchbox";
import IconButton from "@material-ui/core/IconButton";
import { usernameSelector } from "../../redux/slices/username.slice";

const Header = () => {
  const { roomName, image, members } = useSelector(clickChatSelector);
  const { username } = useSelector(usernameSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchbox, setIsSearchbox] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  let animateGroupAvatars = useRef(null);
  const searchboxRef = useRef<HTMLInputElement>(null);

  const handleClickProfile = () => {
    setIsDisabled(false);
    setIsOpen(!isOpen);
  };

  const handleClickSearchbox = () => {
    setIsSearchbox(true);
  };

  return (
    <Container>
      <OutsideClickHandler
        onOutsideClick={() => setIsOpen(false)}
        disabled={isDisabled}
        display={"flex"}
      >
        {!image && <DefaultImage />}
        {image && (
          <Avatar
            onClick={handleClickProfile}
            src={image}
            sx={{
              height: "50px !important",
              width: "50px !important",
              cursor: "pointer",
            }}
          >
            A
          </Avatar>
        )}
        <GroupAvatars
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setIsDisabled={setIsDisabled}
          animateGroupAvatars={animateGroupAvatars}
          handleClickProfile={handleClickProfile}
        />
      </OutsideClickHandler>
      <NameWrapper>
        {!isOpen && <TitleName>{roomName}</TitleName>}
        {!isOpen && (
          <DescriptionName>
            {members &&
              members.map((member: IChip) =>
                username !== member.name ? member.name + ", " : ""
              )}
            {username ? "You" : ""}
          </DescriptionName>
        )}
      </NameWrapper>
      <OutsideClickHandler onOutsideClick={() => setIsSearchbox(false)}>
        <Searchbox
          isSearchbox={isSearchbox}
          searchboxRef={searchboxRef}
          handleClickSearchbox={handleClickSearchbox}
        />
      </OutsideClickHandler>
      <IconButton>
        <StyledMoreVertIcon />
      </IconButton>
    </Container>
  );
};

export default Header;
