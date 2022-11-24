import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppEstudiantesApi from '../api/AppEstudiantesApi';
import { onLogin, onLogout } from '../store/auth/authSlice';

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    console.log(token);

    if (!token) return onLogout();

    try {
      const { data } = await AppEstudiantesApi.post('/renew');
      const { id, name, username, token } = data.data;
      localStorage.setItem('token', token);
      dispatch(onLogin({ id, name, username }));
    } catch (error) {
      localStorage.removeItem('token');
      dispatch(onLogout());
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return status;
};
