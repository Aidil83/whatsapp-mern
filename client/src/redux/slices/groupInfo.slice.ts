import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChip } from "../../components/CreateGroup/CreateGroup";
import { RootState } from "../configureStore";

export interface IGroupInfoStore {
  title: string;
  image: string;
  members: IChip[];
}

const initialState: IGroupInfoStore[] = [];

// These are all the actions:
export const groupInfoSlice = createSlice({
  name: "groupInfo",
  initialState,
  reducers: {
    setGroupInfo: (state, { payload }: PayloadAction<IGroupInfoStore>) => {
      state.push(payload);
    },
  },
});

export const { setGroupInfo } = groupInfoSlice.actions;
export const groupInfoSelector = (state: RootState) => state.groupInfoReducer; // ts needed
export default groupInfoSlice.reducer;
