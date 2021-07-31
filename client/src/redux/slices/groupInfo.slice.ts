import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChip } from "../../components/CreateGroup/CreateGroup";
import { RootState } from "../configureStore";

export interface IGroupInfoStore {
  roomName: string;
  image: string;
  members: IChip[];
}

const initialState: IGroupInfoStore[] = [];

// These are all the actions:
export const groupInfoSlice = createSlice({
  name: "groupInfo",
  initialState,
  reducers: {
    loadGroupInfo: (state, { payload }: PayloadAction<any>) => {
      return payload;
    },
    setGroupInfo: (state, { payload }: PayloadAction<IGroupInfoStore>) => {
      console.log("setGroupInfo: ", payload);
      state.push(payload);
    },
  },
});

export const { loadGroupInfo, setGroupInfo } = groupInfoSlice.actions;
export const groupInfoSelector = (state: RootState) => state.groupInfoReducer; // ts needed
export default groupInfoSlice.reducer;
