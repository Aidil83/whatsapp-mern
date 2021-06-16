import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChip } from "../../components/CreateGroup/CreateGroup";
import { RootState } from "../configureStore";

export interface IMembers {
  title: string;
  image: string;
  members: IChip[];
}

const initialState: IMembers = {
  title: "",
  image: "",
  members: [{ id: 0, title: "", image: "" }],
};

// These are all the actions:
export const membersSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTitle: (state, { payload }: PayloadAction<string>) => {
      state.title = payload;
    },
    addImage: (state, { payload }: PayloadAction<string>) => {
      state.image = payload;
    },
    setMembers: (state, { payload }: PayloadAction<IChip[]>) => {
      state.members = payload;
    },
  },
});

export const { addTitle, addImage, setMembers } = membersSlice.actions;
export const membersSelector = (state: RootState) => state.membersReducer; // ts needed
export default membersSlice.reducer;
