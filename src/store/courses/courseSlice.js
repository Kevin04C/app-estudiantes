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
      state.courses = action.payload;
    },
    fetchFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addCourseStart(state) {
      state.loading = true;
    },
    addCourseSuccess(state, action) {
      state.courses.push(action.payload);
    },
  },
});

export const { fetchStart, fetchFail, fetchCourseSuccess, addCourseStart, addCourseSuccess } =
  courseSlice.actions;
export default courseSlice;
