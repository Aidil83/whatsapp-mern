import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChip } from "../../components/CreateGroup/CreateGroup";
import { RootState } from "../configureStore";

export const storedContactsSlice = createSlice({
  name: "StoredContacts",
  initialState: [] as IChip[],
  reducers: {
    setStoredContacts: (state, { payload }: PayloadAction<any>) => {
      return payload;
    },
    resetStoredContacts: (state) => {
      return [];
    },
    filteredStoredContacts: (state, { payload }: PayloadAction<IChip[]>) => {
      return payload;
    },
  },
});

export const {
  setStoredContacts,
  resetStoredContacts,
  filteredStoredContacts,
} = storedContactsSlice.actions;
export const storedContactsSelector = (state: RootState) =>
  state.storedContactsReducer; // ts needed
export default storedContactsSlice.reducer;
