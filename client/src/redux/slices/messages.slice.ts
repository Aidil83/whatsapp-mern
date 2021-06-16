import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export interface IMessages {
  text: string;
}

const initialState: IMessages[] = [];

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, { payload }: PayloadAction<string>) => {
      state.push({ text: payload });
    },
  },
});

export const { setMessages } = messagesSlice.actions;
export const messagesSelector = (state: RootState) => state.messagesReducer;
export default messagesSlice.reducer;
