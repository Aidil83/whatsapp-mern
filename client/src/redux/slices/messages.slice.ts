import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessages } from "../../interfaces/types";
import { RootState } from "../configureStore";

const initialState: IMessages[] = [];

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    getMessages: (state, { payload }: PayloadAction<IMessages[] | any>) => {
      return payload;
    },
    setMessage: (state, { payload }: PayloadAction<IMessages | any>) => {
      state.push(payload);
    },
  },
});

export const { getMessages, setMessage } = messagesSlice.actions;
export const messagesSelector = (state: RootState) => state.messagesReducer;
export default messagesSlice.reducer;
