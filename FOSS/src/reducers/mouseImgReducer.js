import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showImg: null,
};

const mouseImgSlice = createSlice({
  name: "mouseImg",
  initialState,
  reducers: {
    showNone: (state) => {
      state.showImg = null;
    },
    showUx: (state) => {
      state.showImg = "uxImg";
    },
    showWeb: (state) => {
      state.showImg = "webImg";
    },
  },
});

export const { showNone, showUx, showWeb } = mouseImgSlice.actions;

export default mouseImgSlice.reducer;
