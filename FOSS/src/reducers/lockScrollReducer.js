import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scrollLock: false,
};

const lockScrollSlice = createSlice({
  name: "lockScroll",
  initialState,
  reducers: {
    toggleScroll: (state) => {
      state.scrollLock = !state.scrollLock;
    },
    lockScroll: (state) => {
      state.scrollLock = true;
    },
    unlockScroll: (state) => {
      state.scrollLock = false;
    },
  },
});

export const { toggleScroll, lockScroll, unlockScroll } =
  lockScrollSlice.actions;

export default lockScrollSlice.reducer;
