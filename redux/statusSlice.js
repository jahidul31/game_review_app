import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: "status",
  initialState: {
    status: "null",
  },
  reducers: {
    update: (state) => {
      state.status = "login";
    },
    logout: (state) => {
      state.status = "logout";
    },
  },
});

export const { update, logout } = statusSlice.actions;

export default statusSlice.reducer;
