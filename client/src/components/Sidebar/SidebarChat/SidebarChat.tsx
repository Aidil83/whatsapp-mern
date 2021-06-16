import { useState } from "react";
import styled from "styled-components";
import { IGroupInfoStore } from "../../../redux/slices/groupInfo.slice";
import { DefaultImage, StyledContact } from "./SidebarChat.styles";

interface Props {
  item: IGroupInfoStore;
}

const SidebarChat = ({ item }: Props) => {
  const { members } = item;

  return (
    <>
      {item.title && (
        <StyledContact>
          {!item.image && <DefaultImage />}
          {item.image && (
            <img
              src={item?.image}
              width={50}
              height={50}
              alt="profile-image"
              style={{ borderRadius: "50%" }}
            />
          )}
          <div
            style={{
              textTransform: "capitalize",
              fontSize: 17,
              padding: "0 1em",
              textAlign: "left",
              height: 50,
            }}
          >
            <div>{item.title}</div>
            <TextWrapper style={{ display: "flex" }}>
              {members.map((member: any, idx: any) => {
                return (idx ? ", " : "") + member.title;
              })}
            </TextWrapper>
          </div>
        </StyledContact>
      )}
    </>
  );
};

const TextWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.light};
  font-size: 13px;
  font-family: "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial;
  font-weight: 400;
  text-transform: none;
  line-height: 1.1;
`;

export default SidebarChat;
