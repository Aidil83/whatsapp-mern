import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

interface IUsername {
  username: string;
  isOpen: boolean;
}

const initialState: IUsername = {
  username: "",
  isOpen: false,
};

export const usernameSlice = createSlice({
  name: "user_message",
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>): void => {
      state.username = payload;
    },
    setIsOpen: (state, { payload }: PayloadAction<boolean>): void => {
      state.isOpen = payload;
    },
  },
});

export const { setUsername, setIsOpen } = usernameSlice.actions;
export const usernameSelector = (state: RootState) => state.usernameReducer;
export default usernameSlice.reducer;
