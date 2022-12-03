import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  keyword: localStorage.getItem('keyword'),
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    searchStart(state, action) {
      state.loading = true;
      state.keyword = action.payload;
      localStorage.setItem('keyword', action.payload);
    },
    searchSuccess(state, action) {
      state.articles = action.payload;
      state.loading = false;
    },
    searchFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { searchStart, searchFail, searchSuccess } = searchSlice.actions;
export default searchSlice;
