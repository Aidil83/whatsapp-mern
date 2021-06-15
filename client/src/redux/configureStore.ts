import { configureStore } from "@reduxjs/toolkit";
import groupInfoReducer from "./slices/groupInfo.slice";
import membersReducer from "./slices/members.slice";
import storedContactsReducer from "./slices/storedContacts.slice";
import chipReducer from "./slices/chip.slice";

export const store = configureStore({
  reducer: {
    groupInfoReducer,
    membersReducer,
    storedContactsReducer,
    chipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // ts needed
