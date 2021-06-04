import { IGroupInfoStore } from "../../../redux/slices/groupInfo.slice";
import { SubText } from "../../CreateGroup/CreateGroup.styles";
import { StyledContact } from "./SidebarChat.styles";

interface Props {
  item: IGroupInfoStore;
}

const SidebarChat = ({ item }: Props) => {
  console.log(item);
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
            }}
          >
            {item?.title}
            <SubText>Hey there! I am using Whatsapp.</SubText>
          </div>
        </StyledContact>
      )}
    </>
  );
};

export default SidebarChat;
