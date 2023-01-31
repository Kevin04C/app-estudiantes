import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  keyword: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    searchStart(state, action) {
      state.loading = true;
      state.keyword = action.payload;
    },
    searchSuccess(state, action) {
      state.articles = action.payload;
      state.loading = false;
    },
    saveHistorical(state, action) {
      state.keyword = action.payload;
    },
    searchFail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { searchStart, searchFail, searchSuccess, saveHistorical } = searchSlice.actions;
export default searchSlice;
