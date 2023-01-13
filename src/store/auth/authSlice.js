import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status:
      'not-authenticated' /* 'authenticated' 'not-authenticated', 'checking' */,
    user: {},
    errorMessage: '',
    successMessage: '',
    loadingApp: false,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking';
    },
    onCloseChecking: (state) => {
      state.status = 'not-authenticated';
    },
    onLoadingApp: (state) => {
      state.loadingApp = true;
    },
    onCloseLoadingApp: (state) => {
      state.loadingApp = false;
    },
    onLogin: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload;
      state.loadingApp = false;
    },
    onLogout: (state, { payload }) => {
      state.status = '';
      state.user = {};
      state.loadingApp = false;
      state.errorMessage = payload || '';
    },
    clearErrorMessage: (state) => {
      state.errorMessage = '';
    },
    setSuccessMessage: (state, { payload }) => {
      state.successMessage = payload;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = '';
    },
  },
});

export const {
  clearErrorMessage,
  onChecking,
  onCloseChecking,
  onCloseLoadingApp,
  onLoadingApp,
  onLogin,
  onLogout,
  setSuccessMessage,
  clearSuccessMessage,
} = authSlice.actions;
