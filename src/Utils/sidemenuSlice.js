import { createSlice } from "@reduxjs/toolkit";

const sidemenuSlice = createSlice({
  name: "sideMenu",
  initialState: {
    isShow: false,
  },
  reducers: {
    showvalue: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { showvalue } = sidemenuSlice.actions;
export default sidemenuSlice.reducer;
