import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

interface IMembers {
  id: number | null;
  name: string;
  image: string;
}

export interface IGroupInfoStore {
  title: string;
  image: string;
  members: IMembers[];
}

const initialState: IGroupInfoStore[] = [];

// These are all the actions:
export const groupInfoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setGroupInfo: (state, { payload }: PayloadAction<IGroupInfoStore>) => {
      state.push(payload);
    },
    // setMembers: (state, { payload }: PayloadAction<IMembers[]>) => {
    //   // console.log("setMembers", payload);
    //   // state.push(members: payload);
    // },
  },
});

export const { setGroupInfo, setMembers } = groupInfoSlice.actions;
export const groupInfoSelector = (state: RootState) => state.groupInfoReducer; // ts needed
export default groupInfoSlice.reducer;
