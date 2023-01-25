import AppEstudiantesApi from '../../api/AppEstudiantesApi';
import {
  fetchStart,
  fetchCourseSuccess,
  fetchFail,
  addCourseStart,
  addCourseSuccess,
} from './courseSlice';

export const getCourses = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const { data } = await AppEstudiantesApi.get('/curso');
      dispatch(fetchCourseSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};

export const addCourses = () => {
  return async (dispatch) => {
    dispatch(addCourseStart());
    try {
      const { data } = await AppEstudiantesApi.post('/curso', { titulo, descripcion, estado });
      const { titulo, descripcion, estado } = data.data;
      dispatch(addCourseSuccess());
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};
