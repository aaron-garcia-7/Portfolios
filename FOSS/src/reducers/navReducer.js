import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.navOpen = !state.navOpen;
    },
    openNav: (state) => {
      state.navOpen = true;
    },
    closeNav: (state) => {
      state.navOpen = false;
    },
  },
});

export const { toggleNav, openNav, closeNav } = navSlice.actions;

export default navSlice.reducer;
