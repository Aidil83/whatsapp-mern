import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChip } from "../../components/CreateGroup/CreateGroup";
import { RootState } from "../configureStore";

const initialState: IChip[] = [
  { id: 0, name: "Ali", image: "/static/images/coder.jpg" },
  { id: 1, name: "Arthur", image: "/static/images/coder.jpg" },
  { id: 2, name: "Marvin", image: "/static/images/coder.jpg" },
  { id: 3, name: "Jake", image: "/static/images/coder.jpg" },
  { id: 4, name: "Daniel", image: "/static/images/coder.jpg" },
  { id: 5, name: "Brian", image: "/static/images/coder.jpg" },
];

export const storedContactsSlice = createSlice({
  name: "StoredContacts",
  initialState,
  reducers: {
    setStoredContacts: (state, { payload }: PayloadAction<IChip>) => {
      state.push(payload);
    },
    resetStoredContacts: (state) => {
      return initialState;
    },
    filteredStoredContacts: (state, { payload }: PayloadAction<any>) => {
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
