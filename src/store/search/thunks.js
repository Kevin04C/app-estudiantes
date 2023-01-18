import { searchFail, searchStart, searchSuccess } from './searchSlice';

const apiWikipedia = (search, lang = 'es') =>
  `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

//Generate link to article page
export const urlArticle = (id) => `https://es.wikipedia.org/?curid=${id}`;

export const getSearch = (search, lang) => {
  return async (dispatch) => {
    dispatch(searchStart(search, lang));
    try {
      if (!search) return;
      const res = await fetch(apiWikipedia(search, lang));
      const data = await res.json();
      dispatch(searchSuccess(await data.query.search));
    } catch (error) {
      dispatch(searchFail(error));
    }
  };
};
