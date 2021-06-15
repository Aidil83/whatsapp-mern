import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChip } from "../../components/CreateGroup/CreateGroup";
import { RootState } from "../configureStore";

const initialState: IChip[] = [
  { id: 0, title: "Ali", image: "/static/images/coder.jpg" },
  { id: 1, title: "Arthur", image: "/static/images/coder.jpg" },
  { id: 2, title: "Marvin", image: "/static/images/coder.jpg" },
  { id: 3, title: "Jake", image: "/static/images/coder.jpg" },
  { id: 4, title: "Daniel", image: "/static/images/coder.jpg" },
  { id: 5, title: "Brian", image: "/static/images/coder.jpg" },
];

export const storedContactsSlice = createSlice({
  name: "StoredContacts",
  initialState,
  reducers: {
    setStoredContacts: (state, { payload }: PayloadAction<IChip>) => {
      // return ((state: IChip[]) => [...state, payload]);
      state.push(payload);
    },
    resetStoredContacts: (state) => {
      state = initialState;
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
