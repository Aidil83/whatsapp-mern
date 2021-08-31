import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {
  FooterContainer,
  StyledClipIcons,
  StyledInput,
  StyledMicIcon,
  StyledSmileIcons,
} from "./Footer.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsername,
  usernameSelector,
} from "../../redux/slices/username.slice";
import * as api from "../../api/wsApi";
import { useMutation, useQueryClient } from "react-query";
import { clickChatSelector } from "../../redux/slices/clickChat.slice";
import { IChip } from "../CreateGroup/CreateGroup";

const Footer = () => {
  const username = useSelector(usernameSelector);
  const { roomName, members } = useSelector(clickChatSelector);
  const [trackName, setTrackName] = useState<string>(username);
  const [nameDisplay, setNameDisplay] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(api.postMessage, {
    onSuccess: () => {
      queryClient.invalidateQueries("messages");
    },
  });

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setUsername(prompt("Please enter your name") ?? "Guest"));
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isDisplay = nameDisplay;

    setTrackName(username);

    // Ali === Jake
    if (trackName === username) {
      if (count === 0) {
        setCount(count + 1);
      } else if (count > 0) {
        setNameDisplay(false);
        isDisplay = false;
      }
    } else {
      setNameDisplay(true);
      isDisplay = true;
      setCount(0);
    }

    const color = members.filter((member: IChip) => {
      if (member.name === username) {
        return member.nameColor;
      }
    });

    const nameColor = color[0].nameColor;

    if (nameColor) {
      mutate({
        roomName,
        nameColor,
        isDisplay,
        name: username,
        message: input,
        received: true,
        updatedAt: new Date(),
      });
      setInput("");
    }
  };

  return (
    <FooterContainer>
      <IconButton size="small">
        <StyledSmileIcons />
      </IconButton>
      <IconButton size="small">
        <StyledClipIcons />
      </IconButton>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <StyledInput
          value={input}
          onChange={handleChange}
          placeholder="Type a message..."
        />
      </form>
      <IconButton>
        <StyledMicIcon />
      </IconButton>
    </FooterContainer>
  );
};

export default Footer;
