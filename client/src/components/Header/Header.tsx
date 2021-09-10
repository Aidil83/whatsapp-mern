import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { clickChatSelector } from "../../redux/slices/clickChat.slice";
import { IChip } from "../CreateGroup/CreateGroup";
import { DefaultImage } from "../Sidebar/SidebarChat/SidebarChat.styles";
import GroupAvatars from "./GroupAvatars/GroupAvatars";
import {
  Container,
  DescriptionName,
  NameWrapper,
  TitleName,
  StyledSearchIcon,
  StyledMoreVertIcon,
} from "./Header.styles";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const { roomName, image, members } = useSelector(clickChatSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClickProfile = () => {
    setIsDisabled(false);
    setIsOpen(!isOpen);
  };

  return (
    <Container>
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
      <OutsideClickHandler
        onOutsideClick={() => setIsOpen(false)}
        disabled={isDisabled}
      >
        {isOpen && (
          <GroupAvatars setIsOpen={setIsOpen} setIsDisabled={setIsDisabled} />
        )}
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
      <IconButton>
        <StyledSearchIcon />
      </IconButton>
      <IconButton>
        <StyledMoreVertIcon />
      </IconButton>
    </Container>
  );
};

export default Header;
