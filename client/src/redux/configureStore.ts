import { configureStore } from "@reduxjs/toolkit";
import groupInfoReducer from "./slices/groupInfo.slice";

export const store = configureStore({
  reducer: {
    groupInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // ts needed
