import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHistorical, getSearch, saveSearch } from '../../store/search/thunks';
import { NoArticlesFound } from '../components/Articles/NoArticlesFound';
import ArticlesView from '../components/Articles/ArticlesView';
import queryString from 'query-string';

const ArticlesPage = () => {
  const [lang, setLang] = useState('es');
  const dispatch = useDispatch();
  const { articles, keyword } = useSelector((state) => state.search);
  const { search, pathname } = useLocation();
  const { q } = queryString.parse(search);
  const navigate = useNavigate();

  useEffect(() => {
    q ? dispatch(getSearch(q, lang)) : dispatch(getHistorical(keyword));
    q ? dispatch(saveSearch(q)) : null;
  }, [q, lang, dispatch]);

  const handleLanguage = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className='articles'>
      <div className='filter'>
        <button
          className={`filter__btn ${pathname === '/app/search' ? 'active' : ''}`}
          onClick={() => {
            navigate('/app/search?q=');
            dispatch(getHistorical(keyword));
          }}
        >
          Búsqueda
        </button>
        <span>|</span>
        <button
          className={`filter__btn ${pathname === '/app/articles' ? 'active' : ''}`}
          onClick={() => navigate('/app/articles')}
        >
          Guardado
        </button>
      </div>
      {!q && !keyword ? (
        <NoArticlesFound />
      ) : (
        (q || keyword) && <ArticlesView language={handleLanguage} articles={articles} />
      )}
    </div>
  );
};

export default ArticlesPage;
