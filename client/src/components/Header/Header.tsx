import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { useSelector } from "react-redux";
import { clickChatSelector } from "../../redux/slices/clickChat.slice";
import { IChip } from "../CreateGroup/CreateGroup";
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
  const { title, image, members } = useSelector(clickChatSelector);
  return (
    <Container>
      <ProfilePic src={image} width={50} height={50} />
      <NameWrapper>
        <TitleName>{title}</TitleName>
        <DescriptionName>
          {members &&
            members.map(
              (member: IChip, id: number) => (id ? ", " : "") + member.title
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
