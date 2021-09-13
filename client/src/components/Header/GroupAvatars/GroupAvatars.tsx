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
  isOpen: boolean;
}

const AvatarGroupOverridesExample = ({
  setIsOpen,
  isOpen,
}: IAvatarGroupProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { members } = useSelector(clickChatSelector);
  const dispatch = useDispatch();
  let animateGroupAvatars = useRef(null);

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
    if (isOpen === true) {
      gsap.fromTo(
        animateGroupAvatars,
        { opacity: 0, x: -20, width: 0 },
        {
          display: "flex",
          visibility: "visible",
          opacity: 1,
          x: 0,
          width: 188,
          duration: 0.5,
        }
      );
    }
    if (isOpen === false) {
      gsap.fromTo(
        animateGroupAvatars,
        { opacity: 1, x: 0 },
        {
          display: "none",
          opacity: 0,
          x: -20,
          width: 0,
          duration: 0.3,
          ease: "linear",
        }
      );
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

export default AvatarGroupOverridesExample;

const Container = styled.div<any>`
  margin-left: 10px;
  margin-top: 2px;
  visibility: hidden;
`;
