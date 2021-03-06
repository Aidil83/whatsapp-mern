import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  FooterContainer,
  StyledClipIcons,
  StyledInput,
  StyledMicIcon,
  StyledSendIcon,
  StyledSmileIcons,
} from "./Footer.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen, usernameSelector } from "../../redux/slices/username.slice";
import * as api from "../../api/wsApi";
import { clickChatSelector } from "../../redux/slices/clickChat.slice";
import { IChip } from "../CreateGroup/CreateGroup";
import OutsideClickHandler from "react-outside-click-handler";
import dynamic from "next/dynamic";
const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const Footer = () => {
  const { username } = useSelector(usernameSelector);
  const { roomName, members } = useSelector(clickChatSelector);
  const [nameDisplay, setNameDisplay] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const [isEmoji, setIsEmoji] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const { data: latestMessage } = api.useLatestMessage();

  const { mutate } = api.usePostMessage();

  const dispatch = useDispatch();

  useEffect(() => {
    if (input === "") setIsTyping(false);
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);

    setIsTyping(true);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const isMember = members.find(
      (member: IChip): boolean => member.name === username
    );

    let isDisplay = nameDisplay;

    if (!isMember) {
      dispatch(setIsOpen(true));
      setInput("");
      return;
    }

    // example: Ali === Jake
    if (latestMessage.name === username) {
      setNameDisplay(false);
      isDisplay = false;
    } else {
      setNameDisplay(true);
      isDisplay = true;
    }

    const color = members.filter((member: IChip): string | void => {
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

  interface IEmoji {
    activeSkinTone: string;
    emoji: string;
    names: string[];
    originalUnified: string;
    unified: string;
  }

  const handleEmojiClick = (): void => {
    setIsEmoji(!isEmoji);
  };

  const outsideEmojiClick = (): void => {
    setIsEmoji(false);
  };
  // emojiObject needs to be in the 2nd param.
  const onEmojiClick = (_: any, emojiObject: IEmoji) => {
    console.log(emojiObject.emoji);
    setInput((prevInput: string) => prevInput + emojiObject.emoji);
    setIsEmoji(true);
    setIsTyping(true);
  };

  return (
    <FooterContainer>
      <OutsideClickHandler onOutsideClick={outsideEmojiClick}>
        <IconButton size="small" onClick={handleEmojiClick}>
          <StyledSmileIcons />
        </IconButton>
        {isEmoji && (
          <div style={{ position: "absolute", left: 0, bottom: 60 }}>
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </OutsideClickHandler>
      <IconButton size="small">
        <StyledClipIcons />
      </IconButton>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <OutsideClickHandler
          onOutsideClick={() => {
            if (input === "") return setIsTyping(false);
          }}
        >
          <StyledInput
            value={input}
            onChange={handleChange}
            placeholder="Type a message..."
          />
        </OutsideClickHandler>
      </form>
      {!isTyping && (
        <IconButton style={{ marginLeft: 10 }}>
          <StyledMicIcon />
        </IconButton>
      )}
      {isTyping && (
        <IconButton style={{ marginLeft: 10 }} onClick={handleSubmit}>
          <StyledSendIcon />
        </IconButton>
      )}
    </FooterContainer>
  );
};

export default Footer;
