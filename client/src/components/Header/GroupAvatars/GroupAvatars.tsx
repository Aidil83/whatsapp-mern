import styled from "styled-components";
import { AppearanceType, SizeType } from "@atlaskit/avatar";
import AvatarGroup from "@atlaskit/avatar-group";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { clickChatSelector } from "../../../redux/slices/clickChat.slice";
import { useDispatch, useSelector } from "react-redux";
import { IChip } from "../../CreateGroup/CreateGroup";
import { setUsername } from "../../../redux/slices/username.slice";
import GroupModal from "./GroupModal";

interface IAvatarGroupProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickProfile: () => void;
  isOpen: boolean;
  animateGroupAvatars: any;
}

const GroupAvatars = ({
  setIsOpen,
  isOpen,
  animateGroupAvatars,
}: IAvatarGroupProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { members } = useSelector(clickChatSelector);
  const dispatch = useDispatch();
  const tween: any = useRef(null);

  const data = members.map((d: IChip) => ({
    key: d.id,
    name: d.name,
    src: d.image,
    href: "#",
    appearance: "circle" as AppearanceType,
    size: "medium" as SizeType,
    enableTooltip: true,
    onClick: () => {
      dispatch(setUsername(d.name));
      setIsOpen(false);
    },
  }));

  useEffect(() => {
    tween.current = gsap.timeline().to(animateGroupAvatars, {
      opacity: 1,
      x: 25,
      display: "block",
      width: 188,
      duration: 0.5,
    });
    // if (isOpen) {
    //   tween.current.play();
    // } else {
    //   tween.current.reverse();
    // }

    return () => {
      tween.kill();
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      tween.current.play();
    } else {
      tween.current.reverse();
    }
  }, [isOpen]);

  return (
    <Container ref={(e: any) => (animateGroupAvatars = e)}>
      <AvatarGroup
        testId="overrides"
        appearance="stack"
        data={data}
        size="large"
        onMoreClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget);
        }}
      />
      <GroupModal
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        members={members}
      />
    </Container>
  );
};

export default GroupAvatars;

const Container = styled.div<any>`
  margin-left: 10px;
  margin-top: 2px;
  opacity: 0;
  width: 0;
  display: none;
  position: relative;
  left: -25px;
`;
