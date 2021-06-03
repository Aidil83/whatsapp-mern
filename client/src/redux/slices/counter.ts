import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  title: string;
  image: string;
}

// These are all the actions:
export const counterSlice = createSlice({
  name: "counter",
  initialState: [
    {
      title: "",
      image: "",
    },
  ],
  reducers: {
    setGroupInfo: (state, { payload }: any) => {
      console.log("payload", payload);
    },
  },
});

export const { setGroupInfo } = counterSlice.actions;
export default counterSlice.reducer;
