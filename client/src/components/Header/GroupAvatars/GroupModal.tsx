import { ListItemAvatar, ListItemText } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch } from "react-redux";
import { setUsername } from "../../../redux/slices/username.slice";
import { IChip } from "../../CreateGroup/CreateGroup";

interface IGroupModal {
  anchorEl: null | HTMLElement;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  members: IChip[];
}

export default function GroupModal({
  anchorEl,
  setAnchorEl,
  members,
}: IGroupModal) {
  const dispatch = useDispatch();

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleClick = (name: string): void => {
    console.log("name2", name);
    dispatch(setUsername(name));
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {members?.map(({ _id, name, image }: IChip) => {
          return (
            <MenuItem key={_id} onClick={() => handleClick(name)}>
              <ListItemAvatar>
                <Avatar alt={name} src={image} />
              </ListItemAvatar>
              <ListItemText primary={name} />
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
