import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChip } from "../../components/CreateGroup/CreateGroup";
import { RootState } from "../configureStore";

export interface IMembers {
  roomName: string;
  image: string;
  members: IChip[];
}

const initialState: IMembers = {
  roomName: "",
  image: "",
  members: [{ id: 0, name: "", image: "" }],
};

// These are all the actions:
export const membersSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTitle: (state, { payload }: PayloadAction<string>) => {
      state.roomName = payload;
    },
    addImage: (state, { payload }: PayloadAction<string>) => {
      state.image = payload;
    },
    setMembers: (state, { payload }: PayloadAction<IChip[]>) => {
      state.members = payload;
    },
    resetImage: (state) => {
      state.image = "";
    },
  },
});

export const { addTitle, addImage, setMembers, resetImage } =
  membersSlice.actions;
export const membersSelector = (state: RootState) => state.membersReducer; // ts needed
export default membersSlice.reducer;
