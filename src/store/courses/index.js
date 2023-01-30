import AppEstudiantesApi from '../../api/AppEstudiantesApi';
import {
  fetchStart,
  fetchCourseSuccess,
  fetchFail,
  addCourseSuccess,
  removeCourseSuccess,
  editCourseSuccess,
} from './courseSlice';

export const getCourses = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const { data } = await AppEstudiantesApi.get('/course');
      dispatch(fetchCourseSuccess(await data));
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
};

export const addCourses = (course) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const { data } = await AppEstudiantesApi.post('/course', course);
      dispatch(addCourseSuccess(await data.data.course));
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
};

export const removeCourse = (id) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      await AppEstudiantesApi.delete('/course/' + id);
      dispatch(removeCourseSuccess(id));
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
};

export const editCourse = (newData) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const { data } = await AppEstudiantesApi.patch('/course/' + newData._id, newData);
      dispatch(editCourseSuccess(await data.data.course));
    } catch (error) {
      dispatch(fetchFail(error));
    }
  };
};
