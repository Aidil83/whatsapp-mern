import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";

const initialState: [] = [];

export const chipSlice = createSlice({
  name: "chip",
  initialState,
  reducers: {
    resetChip: (state) => {
      return initialState;
    },
  },
});

export const { resetChip } = chipSlice.actions;
export const chipSelector = (state: RootState) => state.chipReducer;
export default chipSlice.reducer;
