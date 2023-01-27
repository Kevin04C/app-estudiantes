import AppEstudiantesApi from '../../api/AppEstudiantesApi';
import {
  fetchStart,
  fetchCourseSuccess,
  fetchFail,
  addCourseSuccess,
  removeCourseSuccess,
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
    dispatch(fetchStart());
    try {
      const { data } = await AppEstudiantesApi.post('/curso', { titulo, descripcion, estado });
      const { titulo, descripcion, estado } = data.data;
      dispatch(addCourseSuccess());
    } catch (error) {
      dispatch(fetchFail(await error));
    }
  };
};

export const removeCourse = (id) => {
  return async (dispatch) => {
    try {
      AppEstudiantesApi.delete('/curso/' + id);
      dispatch(removeCourseSuccess(id));
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
};
