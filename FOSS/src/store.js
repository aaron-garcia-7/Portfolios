import { configureStore } from "@reduxjs/toolkit";

import layoutReducer from "./reducers/layoutReducer";
import hideReducer from "./reducers/hideReducer";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    hide: hideReducer,
  },
});

export default store;
