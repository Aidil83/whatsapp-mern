import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../configureStore";
import { IChip } from "../../components/CreateGroup/CreateGroup";

export const chipSlice = createSlice({
  name: "chip",
  initialState: [] as IChip[],
  reducers: {
    setStoredChips: (state, { payload }: PayloadAction<IChip[]>) => {
      return payload;
    },
    addChip: (state, { payload }: PayloadAction<IChip>) => {
      state.push(payload);
    },
    resetChip: (state) => {
      return [];
    },
  },
});

export const { setStoredChips, addChip, resetChip } = chipSlice.actions;
export const chipSelector = (state: RootState) => state.chipReducer;
export default chipSlice.reducer;
