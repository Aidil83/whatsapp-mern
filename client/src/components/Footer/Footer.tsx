import { useState, useEffect } from "react";
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
import { getMessages } from "../../redux/slices/messages.slice";
import {
  setUsername,
  usernameSelector,
} from "../../redux/slices/username.slice";
import * as api from "../../api/messagesApi";

const Footer = () => {
  const [input, setInput] = useState<string>("");
  // const [username, setUsername] = useState<string>("Guest");
  const username = useSelector(usernameSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsername(prompt("Please enter your name") ?? "Guest"));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await api.getMessages.post("/messages/new", {
      name: username,
      message: input,
      timestamp: "new timestamp",
      received: true,
    });
    setInput("");
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
