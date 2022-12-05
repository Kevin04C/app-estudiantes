import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearch } from '../../../store/search/thunks';
import ArticlesView from './ArticlesView';
import queryString from 'query-string';

const ArticlesPage = () => {
  const [lang, setLang] = useState('es');
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search);
  const { search } = useLocation();
  const { q } = queryString.parse(search);

  useEffect(() => {
    dispatch(getSearch(q, lang));
  }, [q, lang]);

  const handleLanguage = (e) => {
    setLang(e.target.value);
  };

  return (
    <div className='articles'>
      {results.articles.length > 0 && (
        <ArticlesView language={handleLanguage} articles={results.articles} />
      )}
    </div>
  );
};

export default ArticlesPage;
