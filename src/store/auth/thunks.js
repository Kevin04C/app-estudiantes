import { toast } from 'react-hot-toast';
import AppEstudiantesApi from '../../api/AppEstudiantesApi';
import {
  clearErrorMessage,
  clearSuccessMessage,
  onCancelLoadingPhoto,
  onChangingPassword,
  onChecking,
  onCloseChecking,
  onLoadingPhoto,
  onLogin,
  onLogout,
  onSearchingEmail,
  setPhoto,
  setSuccessMessage,
  setSuccessSearchEmail,
  SuccessChangedPassword,
} from './authSlice';

export const startRegister = (form) => {
  return async (dispatch) => {
    dispatch(onChecking());

    try {
      const { data } = await AppEstudiantesApi.post('/register', form);
      dispatch(onCloseChecking());
      dispatch(setSuccessMessage('Hemos enviando un correo para validar tu cuenta'));
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
      const { id, name, username, token, image } = data.data;
      localStorage.setItem('token', token);
      dispatch(onLogin({ id, name, username, image }));
    } catch (error) {
      const ObjErr = error.response?.data;
      dispatch(onLogout(ObjErr?.errorMsg));
      setTimeout(() => dispatch(clearErrorMessage()), 5000);
    }
  };
};

export const startUploadPhoto = (fileImagen) => {
  return async (dispatch) => {
    try {
      dispatch(onLoadingPhoto());
      const formData = new FormData();
      formData.append('image', fileImagen);
      const { data } = await AppEstudiantesApi.patch('/user/uploadPhoto', formData);
      dispatch(setPhoto(data?.data.image));
      toast.success('Foto actualizada');
    } catch (error) {
      toast.error('Error al actualizar la foto');
      dispatch(onCancelLoadingPhoto());
    }
  };
};

export const startSearchEmail = (email) => {
  return async (dispatch) => {
    dispatch(onSearchingEmail());
    try {
      const { data } = await AppEstudiantesApi.post('/user/forgot/password', email);
      if (!data.success) throw new Error('Hubo un error');
      dispatch(setSuccessSearchEmail());
      localStorage.setItem('id', data.data.id);
      localStorage.setItem('cryptotoken', data.data.cryptoToken);
    } catch (error) {
      const { data } = error.response;
      dispatch(onLogout(`${data.errorMsg} y/o usuario no encontrado`));
    }
  };
};

export const startChangePassword = ({ password, userId, cryptotoken }) => {
  return async (dispatch) => {
    dispatch(onChangingPassword());
    try {
      const { data } = await AppEstudiantesApi.post(
        '/user/reset',
        { password },
        {
          headers: {
            userId,
            cryptotoken,
          },
        },
      );
      if (data.success) {
        dispatch(setSuccessMessage(data.data.msg));
        dispatch(SuccessChangedPassword());

        localStorage.removeItem('id');
        localStorage.removeItem('cryptotoken');

        setTimeout(() => {
          dispatch(clearSuccessMessage());
        }, 3000);
      }
    } catch (error) {
      dispatch(onLogout(`Error al cambiar la contraseña`));
    }
  };
};
