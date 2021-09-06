import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import { blue } from "@material-ui/core/colors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsOpen,
  setUsername,
  usernameSelector,
} from "../../../redux/slices/username.slice";
import { clickChatSelector } from "../../../redux/slices/clickChat.slice";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog({ onClose, selectedValue }: SimpleDialogProps) {
  const classes = useStyles();
  const { isOpen } = useSelector(usernameSelector);
  const { members } = useSelector(clickChatSelector);
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string): void => {
    dispatch(setUsername(value));
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={isOpen}
    >
      <DialogTitle id="simple-dialog-title">
        Only group members can send messages! Select user.
      </DialogTitle>
      <List>
        {members.map((member) => (
          <ListItem
            button
            onClick={() => handleListItemClick(member.name)}
            key={member.id}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={member.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function UserPrompt() {
  // const [isopen, setOpen] = useState(false);
  const { isOpen } = useSelector(usernameSelector);
  const { members } = useSelector(clickChatSelector);
  const [selectedValue, setSelectedValue] = useState<string>(members[1]?.name);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <div>
      <SimpleDialog
        selectedValue={selectedValue}
        open={isOpen}
        onClose={handleClose}
      />
    </div>
  );
}
