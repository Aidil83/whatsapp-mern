import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { useSelector } from "react-redux";
import { clickChatSelector } from "../../redux/slices/clickChat.slice";
import { IChip } from "../CreateGroup/CreateGroup";
import { DefaultImage } from "../Sidebar/SidebarChat/SidebarChat.styles";
import {
  Container,
  DescriptionName,
  NameWrapper,
  ProfilePic,
  TitleName,
  StyledSearchIcon,
  StyledMoreVertIcon,
} from "./Header.styles";

const Header = () => {
  const { roomName, image, members } = useSelector(clickChatSelector);
  return (
    <Container>
      {!image && <DefaultImage />}
      {image && (
        <Avatar src={image} style={{ height: 50, width: 50 }}>
          A
        </Avatar>
      )}
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
