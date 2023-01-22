import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState: {
    showMenu: false,
  },
  reducers: {
    toogleMenu: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toogleMenu } = uiSlice.actions;
