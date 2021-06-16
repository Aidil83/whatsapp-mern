import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export interface IMessages {
  username: string;
  text: string;
}

const initialState: IMessages[] = [];

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, { payload }: PayloadAction<IMessages>) => {
      state.push(payload);
    },
  },
});

export const { setMessages } = messagesSlice.actions;
export const messagesSelector = (state: RootState) => state.messagesReducer;
export default messagesSlice.reducer;
