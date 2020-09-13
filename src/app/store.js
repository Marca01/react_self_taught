import { configureStore } from "@reduxjs/toolkit";
import photo from "features/Photo/PhotoSlice";

const rootReducer = {
  photos: photo,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
