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
    addTitle: (state, { payload }: PayloadAction<string>) => {
      state.title = payload;
    },
    addImage: (state, { payload }: PayloadAction<string>) => {
      state.image = payload;
    },
    setMembers: (state, { payload }: PayloadAction<IMembers>) => {
      state.members = { payload };
    },
  },
});

export const { addTitle, addImage, setMembers } = membersSlice.actions;
export const membersSelector = (state: RootState) => state.membersReducer; // ts needed
export default membersSlice.reducer;
