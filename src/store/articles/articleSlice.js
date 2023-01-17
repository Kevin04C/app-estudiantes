import { createSlice } from '@reduxjs/toolkit';

const articles =
  localStorage.getItem('myArticles') !== null
    ? JSON.parse(localStorage.getItem('myArticles'))
    : [];

const initialState = articles;

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    saveArticle(state, action) {
      state.push(action.payload);
      localStorage.setItem('myArticles', JSON.stringify(state));
    },
    removeArticle(state, action) {
      const isAdedd = state.find((art) => art.pageid === action.payload.pageid);
      if (isAdedd) {
        state.splice(state.indexOf(isAdedd), 1);
      }
      localStorage.setItem('myArticles', JSON.stringify(state));
    },
  },
});

export const { saveArticle, removeArticle } = articleSlice.actions;
export default articleSlice;
