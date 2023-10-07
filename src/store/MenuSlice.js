import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: false,
  },
  reducers: {
    setMenu(state) {
      state.menu = !state.menu;
    },
  },
});
export const { setMenu } = MenuSlice.actions;
export default MenuSlice.reducer;
