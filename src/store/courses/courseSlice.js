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
      const { courses } = action.payload.data;
      state.courses = courses?.reverse();
    },
    fetchFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addCourseSuccess(state, action) {
      state.loading = false;
      state.courses.unshift(action.payload);
    },
    removeCourseSuccess(state, action) {
      state.loading = false;
      state.courses = state.courses.filter((c) => c._id != action.payload);
    },
    editCourseSuccess(state, action) {
      state.loading = false;
      const itemIndex = state.courses.findIndex((item) => item._id === action.payload._id);
      state.courses[itemIndex] = { ...state.courses[itemIndex], ...action.payload };
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  fetchCourseSuccess,
  addCourseSuccess,
  removeCourseSuccess,
  editCourseSuccess,
} = courseSlice.actions;
export default courseSlice;
