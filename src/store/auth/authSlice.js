import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status:
      'not-checking' /* 'authenticated' 'not-authenticated', 'checking' */,
    user: {},
    errorMessage: '',
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
    },
    onLogout: (state, { payload }) => {
      state.status = '';
      state.user = {};
      state.errorMessage = payload || '';
    },
    clearErrorMessage: (state) => {
      state.errorMessage = '';
    },
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
