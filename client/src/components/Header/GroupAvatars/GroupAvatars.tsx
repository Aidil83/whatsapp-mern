import styled from "styled-components";
import { AppearanceType, SizeType } from "@atlaskit/avatar";
import Button from "@atlaskit/button/standard-button";
import { groupData } from "./GroupData";
import AvatarGroup from "@atlaskit/avatar-group";
import { Fragment, useEffect, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import gsap from "gsap";
import { clickChatSelector } from "../../../redux/slices/clickChat.slice";
import { useSelector } from "react-redux";
import { IChip } from "../../CreateGroup/CreateGroup";

const ButtonGroup = styled.div`
  margin: 8px;
  text-align: center;
`;

interface IAvatarGroupProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const AvatarGroupOverridesExample = ({
  setIsOpen,
  setIsDisabled,
  isOpen,
}: IAvatarGroupProps) => {
  const { members } = useSelector(clickChatSelector);
  let animateGroupAvatars = useRef(null);

  const data = members.slice(0, 8).map((d: IChip) => ({
    key: d.id,
    name: d.name,
    src: d.image,
    href: "#",
    appearance: "circle" as AppearanceType,
    size: "medium" as SizeType,
    enableTooltip: true,
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
        overrides={{
          AvatarGroupItem: {
            render: (Component, props, index) => {
              const avatarItem = <Component {...props} key={index} />;
              setIsDisabled(true);

              return index === data.length - 1 ? (
                <Fragment key={`${index}-overridden`}>
                  {avatarItem}
                  <ButtonGroup data-testid="load-more-actions">
                    <OutsideClickHandler
                      onOutsideClick={() => setIsOpen(false)}
                    >
                      <Button testId="load-more" css={undefined}>
                        Load more
                      </Button>
                    </OutsideClickHandler>
                  </ButtonGroup>
                </Fragment>
              ) : (
                avatarItem
              );
            },
          },
        }}
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
