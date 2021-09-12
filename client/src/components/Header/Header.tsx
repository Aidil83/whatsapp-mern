import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import React, { useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useSelector } from "react-redux";
import { clickChatSelector } from "../../redux/slices/clickChat.slice";
import { IChip } from "../CreateGroup/CreateGroup";
import { DefaultImage } from "../Sidebar/SidebarChat/SidebarChat.styles";
import GroupAvatars from "./GroupAvatars/GroupAvatars";
import {
  Container,
  DescriptionName,
  NameWrapper,
  StyledMoreVertIcon,
  StyledSearchIcon,
  TitleName,
} from "./Header.styles";
import Searchbox from "./Searchbox/Searchbox";

const Header = () => {
  const { roomName, image, members } = useSelector(clickChatSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchbox, setIsSearchbox] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  let searchboxRef = useRef(null);

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
            style={{ height: 50, width: 50, cursor: "pointer" }}
          >
            A
          </Avatar>
        )}
        <GroupAvatars
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setIsDisabled={setIsDisabled}
        />
      </OutsideClickHandler>
      <NameWrapper>
        <TitleName>{roomName}</TitleName>
        <DescriptionName>
          {members &&
            members.map(
              (member: IChip, id: number) => (id ? ", " : "") + member.name
            )}
        </DescriptionName>
      </NameWrapper>
      {!isSearchbox && (
        <IconButton onClick={handleClickSearchbox}>
          <StyledSearchIcon />
        </IconButton>
      )}
      <OutsideClickHandler onOutsideClick={() => setIsSearchbox(false)}>
        {isSearchbox && <Searchbox searchboxRef={searchboxRef} />}
      </OutsideClickHandler>
      <IconButton>
        <StyledMoreVertIcon />
      </IconButton>
    </Container>
  );
};

export default Header;
