import AppEstudiantesApi from '../../api/AppEstudiantesApi';
import {
  clearErrorMessage,
  clearSuccessMessage,
  onChecking,
  onCloseChecking,
  onLogin,
  onLogout,
  setSuccessMessage,
} from './authSlice';

export const startRegister = (form) => {
  return async (dispatch) => {
    dispatch(onChecking());

    try {
      const { data } = await AppEstudiantesApi.post('/registro', form);
      const { message } = data.data;
      dispatch(onCloseChecking());
      dispatch(setSuccessMessage(message));
      setTimeout(() => dispatch(clearSuccessMessage()), 10);
    } catch (error) {
      const { response } = error;

      dispatch(onLogout(response?.data?.errorMsg));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };
};

export const startLogin = (form) => {
  return async (dispatch) => {
    dispatch(onChecking());
    try {
      const { data } = await AppEstudiantesApi.post('/login', form);
      const { id, name, username, token, imagen } = data.data;
      localStorage.setItem('token', token);
      dispatch(onLogin({ id, name, username, imagen }));
    } catch (error) {
      const ObjErr = error.response?.data;
      dispatch(onLogout(ObjErr?.errorMsg));
      setTimeout(() => dispatch(clearErrorMessage()), 5000);
    }
  };
};
