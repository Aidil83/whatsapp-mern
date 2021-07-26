import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

export interface IMessages {
  message: string;
  name: string;
  received: boolean;
  __v?: number;
  _id?: string;
}

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
