import axios from 'axios';

const AppEstudiantesApi = axios.create({
  baseURL: import.meta.env.VITE_API_APP_ESTUDIANTES,
});

AppEstudiantesApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: 'bearer ' + localStorage.getItem('token'),
  };

  return config;
});

export default AppEstudiantesApi;
