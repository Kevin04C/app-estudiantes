import { searchFail, searchStart, searchSuccess } from './searchSlice';

const apiWikipedia = (search) =>
  `https://es.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

//Generate link to article page
export const urlArticle = (id) => `https://es.wikipedia.org/?curid=${id}`;

export const getSearch = (search = localStorage.getItem('keyword')) => {
  return async (dispatch) => {
    dispatch(searchStart(search));
    try {
      const res = await fetch(apiWikipedia(search));
      const data = await res.json();
      dispatch(searchSuccess(await data.query.search));
    } catch (error) {
      dispatch(searchFail(await error));
    }
  };
};
