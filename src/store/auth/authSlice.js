import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated' /* 'authenticated' 'not-authenticated', 'checking' */,
    user: null,
    errorMessage: '',
    successMessage: '',
    loadingApp: false,
    uploadingPhoto: false,
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
      state.user = null;
      state.loadingApp = false;
      state.errorMessage = payload || '';
    },
    onLoadingPhoto: (state) => {
      state.uploadingPhoto = true;
    },
    onCancelLoadingPhoto: (state) => {
      state.uploadingPhoto = false;
    },
    setPhoto: (state, { payload }) => {
      state.user.image = payload;
      state.uploadingPhoto = false;
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
  clearSuccessMessage,
  onCancelLoadingPhoto,
  onChangingPassword,
  onChecking,
  onCloseChecking,
  onCloseLoadingApp,
  onLoadingApp,
  onLoadingPhoto,
  onLogin,
  onLogout,
  onSearchingEmail,
  setPhoto,
  setSuccessMessage,
  setSuccessSearchEmail,
  SuccessChangedPassword,
} = authSlice.actions;
