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
    foundEmail: false,
    searchingEmail: false,
    changingPassword: false,
    passwordChanged: false,
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
      state.foundEmail = false;
      state.searchingEmail = false;
      state.passwordChanged = false;
      state.changingPassword = false;
      state.errorMessage = payload || '';
    },
    onLoadingPhoto: (state, { uploading = true }) => {
      state.uploadingPhoto = uploading;
    },
    setPhoto: (state, { payload }) => {
      state.user.imagen = payload;
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
    onSearchingEmail: (state) => {
      state.searchingEmail = true;
    },
    setSuccessSearchEmail: (state) => {
      state.foundEmail = true;
      state.searchingEmail = false;
    },
    onChangingPassword: (state) => {
      state.changingPassword = true;
    },
    SuccessChangedPassword: (state) => {
      state.changingPassword = false;
      state.passwordChanged = true;
    },
  },
});

export const {
  clearErrorMessage,
  clearSuccessMessage,
  onChecking,
  onCloseChecking,
  onCloseLoadingApp,
  onLoadingApp,
  onLoadingPhoto,
  onLogin,
  onLogout,
  setPhoto,
  setSuccessMessage,
  onSearchingEmail,
  setSuccessSearchEmail,
  onChangingPassword,
  SuccessChangedPassword,
} = authSlice.actions;
