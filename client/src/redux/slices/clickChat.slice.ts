import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { IMembers } from "./members.slice";

const initialState: IMembers = {
  roomName: "",
  image: "",
  members: [],
};

// These are all the actions:
export const clickChatSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    goToChat: (state, { payload }: PayloadAction<IMembers>) => {
      return payload;
    },
  },
});

export const { goToChat } = clickChatSlice.actions;
export const clickChatSelector = (state: RootState) => state.clickChatReducer; // ts needed
export default clickChatSlice.reducer;
