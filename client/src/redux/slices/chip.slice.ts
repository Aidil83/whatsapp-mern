import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChip } from "../../components/CreateGroup/CreateGroup";
import { RootState } from "../configureStore";

const initialState: IChip[] = [];

export const chipSlice = createSlice({
  name: "chip",
  initialState,
  reducers: {
    setStoredChips: (state, { payload }: PayloadAction<IChip[]>) => {
      return payload;
    },
    addChip: (state, { payload }: PayloadAction<IChip>) => {
      return [...state, payload];
    },
    resetChip: (state) => {
      return initialState;
    },
  },
});

export const { setStoredChips, addChip, resetChip } = chipSlice.actions;
export const chipSelector = (state: RootState) => state.chipReducer;
export default chipSlice.reducer;
