import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultLayout: true,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    changeLayout: (state) => {
      state.defaultLayout = false;
    },
    restoreLayout: (state) => {
      state.defaultLayout = initialState;
    },
  },
});

export const { changeLayout, restoreLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
