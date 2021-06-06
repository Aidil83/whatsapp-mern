import { IGroupInfoStore } from "../../../redux/slices/groupInfo.slice";
import { SubText } from "../../CreateGroup/CreateGroup.styles";
import { StyledContact } from "./SidebarChat.styles";

interface Props {
  item: IGroupInfoStore;
}

const SidebarChat = ({ item }: Props) => {
  console.log("item ->", item);
  const { members } = item;
  return (
    <>
      {item.image && (
        <StyledContact>
          <img
            src={item?.image}
            width={50}
            height={50}
            alt="profile-image"
            style={{ borderRadius: "50%" }}
          />
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
            <div style={{ display: "flex" }}>
              {members.payload?.map((member: any, idx: any) => {
                return (
                  <div key={idx} style={{ display: "flex" }}>
                    <SubText>{(idx ? ", " : "") + member.title}</SubText>
                  </div>
                );
              })}
            </div>
          </div>
        </StyledContact>
      )}
    </>
  );
};

export default SidebarChat;
