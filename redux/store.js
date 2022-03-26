import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./statusSlice";

export default configureStore({
  reducer: {
    status: statusReducer,
  },
});
