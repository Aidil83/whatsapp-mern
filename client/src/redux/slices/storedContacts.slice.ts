import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChip } from "../../components/CreateGroup/CreateGroup";
import { IContact } from "../../interfaces/types";
import { RootState } from "../configureStore";

export const storedContactsSlice = createSlice({
  name: "StoredContacts",
  initialState: [] as IChip[],
  reducers: {
    setStoredContacts: (state, { payload }: PayloadAction<IChip[]>) => {
      return payload;
    },
    setRestoreContact: (state, { payload }: PayloadAction<IChip>) => {
      state.push(payload);
    },
    resetStoredContacts: (state) => {
      return [];
    },
    restoreAllContacts: (state, { payload }: PayloadAction<IChip[]>) => {
      payload.forEach((contact: IChip) => {
        state.push(contact);
      });
    },
    filteredStoredContacts: (
      state,
      {
        payload,
      }: PayloadAction<{ storedContacts: IChip[]; contact: IContact & IChip }>
    ) => {
      const index = state.findIndex((i) => i._id === payload.contact._id);
      if (index >= 0) {
        state.splice(index, 1);
      }
    },
  },
});

export const {
  setStoredContacts,
  setRestoreContact,
  resetStoredContacts,
  restoreAllContacts,
  filteredStoredContacts,
} = storedContactsSlice.actions;
export const storedContactsSelector = (state: RootState) =>
  state.storedContactsReducer; // ts needed
export default storedContactsSlice.reducer;
