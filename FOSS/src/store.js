import { configureStore } from "@reduxjs/toolkit";

import layoutReducer from "./reducers/layoutReducer";
import hideReducer from "./reducers/hideReducer";
import navReducer from "./reducers/navReducer";
import lockScrollReducer from "./reducers/lockScrollReducer";
import mouseImgReducer from "./reducers/mouseImgReducer";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    hide: hideReducer,
    nav: navReducer,
    lockScroll: lockScrollReducer,
    mouseImg: mouseImgReducer,
  },
});

export default store;
