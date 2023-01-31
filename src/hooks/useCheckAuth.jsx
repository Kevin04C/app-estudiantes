import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppEstudiantesApi from '../api/AppEstudiantesApi';
import { onCloseLoadingApp, onLoadingApp, onLogin, onLogout } from '../store/auth/authSlice';

export const useCheckAuth = () => {
  const { status, loadingApp } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const checkAuth = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch(onLogout());
      dispatch(onCloseLoadingApp());
      return;
    }

    try {
      const { data } = await AppEstudiantesApi.post('/renew');
      const { id, name, username, token, image } = data.data;
      localStorage.setItem('token', token);
      dispatch(onLogin({ id, name, username, image }));
    } catch (error) {
      dispatch(onLogout());
    }
  };

  useLayoutEffect(() => {
    dispatch(onLoadingApp());
    checkAuth();
  }, []);

  return {
    status,
    loadingApp,
  };
};
