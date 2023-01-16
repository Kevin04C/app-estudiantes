import { createSlice } from '@reduxjs/toolkit';

const articles =
  localStorage.getItem('myArticles') !== null
    ? JSON.parse(localStorage.getItem('myArticles'))
    : [];

const initialState = {
  articles,
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    saveArticle(state, action) {
      state.articles.push(action.payload);
      localStorage.setItem('myArticles', JSON.stringify(state));
    },
    removeArticle(state, action) {
      const isAdedd = state.articles.find(
        (art) => art.id === action.payload.id,
      );
      if (isAdedd) {
        state.articles.splice(state.articles.indexOf(isAdedd), 1);
      }
    },
  },
});

export const { saveArticle, removeArticle } = articleSlice.actions;
export default articleSlice;
