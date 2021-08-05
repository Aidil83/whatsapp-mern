import styled from "styled-components";
import { IGroupInfoStore } from "../../../redux/slices/groupInfo.slice";
import { IChip } from "../../CreateGroup/CreateGroup";
import { DefaultImage, StyledContact } from "./SidebarChat.styles";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { goToChat } from "../../../redux/slices/clickChat.slice";
import { MyProfilePic } from "../Sidebar.styles";

interface Props {
  item: IGroupInfoStore;
  id: number;
}

const SidebarChat = ({ item, id }: Props) => {
  const { members } = item;
  const router = useRouter();
  const dispatch = useDispatch();

  const openChat = (c_id: number): void => {
    router.push(`/chat/${c_id}`);
    dispatch(goToChat(item));
  };

  return (
    <>
      {item.roomName && (
        <StyledContact onClick={() => openChat(id)}>
          {!item.image && <DefaultImage />}
          {item.image && (
            <MyProfilePic
              src={item?.image}
              width={50}
              height={50}
              placeholder="my-profile"
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
            <div>{item.roomName}</div>
            <TextWrapper style={{ display: "flex" }}>
              {members.map((member: IChip, idx: number) => {
                return (idx ? ", " : "") + member.name;
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
