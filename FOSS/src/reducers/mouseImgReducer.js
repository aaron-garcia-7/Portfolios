import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showImg: null,
  inResume: false,
};

const mouseImgSlice = createSlice({
  name: "mouseImg",
  initialState,
  reducers: {
    showNone: (state) => {
      state.showImg = null;
      state.inResume = false;
    },
    showUx: (state) => {
      state.showImg = "uxImg";
      state.inResume = false;
    },
    showWeb: (state) => {
      state.showImg = "webImg";
      state.inResume = false;
    },
    showProj1: (state) => {
      state.showImg = "proj1Img";
      state.inResume = true;
    },
    showProj2: (state) => {
      state.showImg = "proj2Img";
      state.inResume = true;
    },
    showProj3: (state) => {
      state.showImg = "proj3Img";
      state.inResume = true;
    },
  },
});

export const { showNone, showUx, showWeb, showProj1, showProj2, showProj3 } =
  mouseImgSlice.actions;

export default mouseImgSlice.reducer;
