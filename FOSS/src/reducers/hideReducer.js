import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: true,
};

const hideSlice = createSlice({
  name: "hide",
  initialState,
  reducers: {
    hideElements: (state) => {
      state.display = false;
      // console.log(`display should be hidden. Display is ${state.display}`);
    },
    showElements: (state) => {
      state.display = true;
      // console.log(`display should now be showing. Display is ${state.display}`);
    },
  },
});

export const { hideElements, showElements } = hideSlice.actions;

export default hideSlice.reducer;
