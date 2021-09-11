import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
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

  const handleClose = (name: string): void => {
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
        {members?.map(({ id, name }: IChip) => {
          return (
            <MenuItem key={id} onClick={() => handleClose(name)}>
              {name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
