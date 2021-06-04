import { configureStore } from "@reduxjs/toolkit";
import groupInfoReducer from "./slices/groupInfo.slice";
import membersReducer from "./slices/members.slice";

export const store = configureStore({
  reducer: {
    groupInfoReducer,
    membersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // ts needed
