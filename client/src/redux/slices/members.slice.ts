import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export interface IMembers {
  title: string;
  image: string;
  members: [{ id: number | null; name: string; image: string }];
}

const initialState: IMembers = {
  title: "",
  image: "",
  members: [{ id: null, name: "", image: "" }],
};

// These are all the actions:
export const membersSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addGroup: (state, { payload }: PayloadAction<IMembers>) => {
      console.log(payload);
    },
    setMembers: (state, { payload }: PayloadAction<IMembers>) => {
      state.members = { payload };
    },
  },
});

export const { addGroup, setMembers } = membersSlice.actions;
export const membersSelector = (state: RootState) => state.membersReducer; // ts needed
export default membersSlice.reducer;
