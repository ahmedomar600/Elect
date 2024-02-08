import { configureStore } from "@reduxjs/toolkit";
import posts from "./createSlice";
import auth from "./RegisterSlice";
const store = configureStore({
  reducer: { posts, auth }
});

export default store;
