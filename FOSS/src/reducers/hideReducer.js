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
    },
    showElements: (state) => {
      state.display = initialState;
    },
  },
});

export const { hideElements, showElements } = hideSlice.actions;

export default hideSlice.reducer;
