import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  message: '',
  courses: [],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
    },
    fetchCourseSuccess(state, action) {
      state.loading = false;
      const { cursos } = action.payload.data;
      state.courses = cursos;
    },
    fetchFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addCourseSuccess(state, action) {
      state.courses.push(action.payload);
    },
    removeCourseSuccess(state, action) {
      const selectedCourse = state.courses.find((course) => course._id === action.payload);
      state.courses.splice(state.courses.indexOf(selectedCourse), 1);
    },
  },
});

export const { fetchStart, fetchFail, fetchCourseSuccess, addCourseSuccess, removeCourseSuccess } =
  courseSlice.actions;
export default courseSlice;
