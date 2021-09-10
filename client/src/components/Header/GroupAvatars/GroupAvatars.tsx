import styled from "styled-components";
import { AppearanceType, SizeType } from "@atlaskit/avatar";
import Button from "@atlaskit/button/standard-button";
import { groupData } from "./GroupData";
import AvatarGroup from "@atlaskit/avatar-group";
import { Fragment, useEffect, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import gsap from "gsap";

const ButtonGroup = styled.div`
  margin: 8px;
  text-align: center;
`;

const data = groupData.slice(0, 8).map((d) => ({
  email: d.email,
  key: d.email,
  name: d.name,
  href: "#",
  src: "/static/images/coder.jpg",
  appearance: "circle" as AppearanceType,
  size: "medium" as SizeType,
  enableTooltip: true,
}));

interface IAvatarGroupProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvatarGroupOverridesExample = ({
  setIsOpen,
  setIsDisabled,
}: IAvatarGroupProps) => {
  let animateGroupAvatars = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      animateGroupAvatars,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  }, [setIsOpen]);

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
                  <ButtonGroup
                    data-testid="load-more-actions"
                    style={{ color: "orange" }}
                  >
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
`;
