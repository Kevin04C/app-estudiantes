import AppEstudiantesApi from '../../api/AppEstudiantesApi';
import { clearErrorMessage, onChecking, onLogin, onLogout } from './authSlice';

export const startRegister = (form) => {
  return async (dispatch) => {
    dispatch(onChecking());

    try {
      const { data } = await AppEstudiantesApi.post('/registro', form);
      const { id, name, username, token } = data.data;

      localStorage.setItem('x-token', token);
      dispatch(onLogin({ id, name, username }));
    } catch (error) {
      const { response } = error;

      dispatch(onLogout(response?.data?.errorMsg));
      localStorage.removeItem('token');

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
      const { id, name, username, token } = data.data;
      localStorage.setItem('token', token);
      dispatch(onLogin({ id, name, username }));
    } catch (error) {
      dispatch(onLogout('Correo o contraseña incorrectos'));

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 5000);
    }
  };
};
