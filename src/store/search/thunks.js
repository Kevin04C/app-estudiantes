import { saveHistorical, searchFail, searchStart, searchSuccess } from './searchSlice';
import AppEstudiantesApi from '../../api/AppEstudiantesApi';
import axios from 'axios';

const apiWikipedia = (search, lang = 'es') =>
  `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

//Generate link to article page
export const urlArticle = (id) => `https://es.wikipedia.org/?curid=${id}`;

export const getSearch = (search, lang) => {
  return async (dispatch) => {
    dispatch(searchStart(search, lang));
    try {
      if (!search) return;
      const { data } = await axios.get(apiWikipedia(search, lang));
      dispatch(searchSuccess(await data.query.search));
    } catch (error) {
      dispatch(searchFail(error));
    }
  };
};

export const saveSearch = (search) => {
  return async (dispatch) => {
    dispatch(searchStart());
    try {
      const { data } = await AppEstudiantesApi.post('/historical/search', { text: search });
      saveHistorical(data.data.search.text);
    } catch (error) {
      dispatch(searchFail(error));
    }
  };
};

export const getHistorical = () => {
  return async (dispatch) => {
    dispatch(searchStart());
    try {
      const { data } = await AppEstudiantesApi.get('/historical/search?=limit=1');
      dispatch(getSearch(data.data.historical[0].text, 'es'));
    } catch (error) {
      dispatch(searchFail(error));
    }
  };
};
