import { configureStore } from "@reduxjs/toolkit";

import layoutReducer from "./reducers/layoutReducer";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});

export default store;
