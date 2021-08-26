import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

const initialState: string = "You";

export const usernameSlice = createSlice({
  name: "user_message",
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      return payload;
    },
  },
});

export const { setUsername } = usernameSlice.actions;
export const usernameSelector = (state: RootState) => state.usernameReducer;
export default usernameSlice.reducer;
