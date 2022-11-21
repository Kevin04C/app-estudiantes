import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    search(state, action) {
      return {
        ...state,
        articles: [...state.articles],
      };
    },
  },
});

const api = (search) =>
  `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
const urlArticle = (id) => `https://en.wikipedia.org/?curid=${id}`; //eslint-disable-line

export const searchWikipedia = () => async (dispatch) => {
  dispatch(searchStart());
};

export const { search } = searchSlice.actions;
export default searchSlice;
