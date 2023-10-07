import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./MenuSlice";
import VideoSlice from "./VideoSlice";

const store = configureStore({
  reducer: {
    menu: MenuReducer,
    videos: VideoSlice,
  },
});
export default store;
