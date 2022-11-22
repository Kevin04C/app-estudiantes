import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import searchSlice from './search/searchSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    search: searchSlice.reducer,
  },
});
