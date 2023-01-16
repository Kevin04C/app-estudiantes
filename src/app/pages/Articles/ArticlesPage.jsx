import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSearch } from '../../../store/search/thunks';
import { NoArticlesFound } from '../../components/Articles/NoArticlesFound';
import ArticlesView from './ArticlesView';

const ArticlesPage = () => {
  const [lang, setLang] = useState('es');
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search);

  const { search } = useParams();

  const handleLanguage = (e) => {
    setLang(e.target.value);
  };

  useEffect(() => {
    dispatch(
      getSearch(search ? search : localStorage.getItem('keyword'), lang),
    );
  }, [dispatch, search, lang]);

  return (
    <div className='articles'>
      {!search && localStorage.getItem('keyword') === null && (
        <NoArticlesFound />
      )}
      {results.articles.length > 0 && (
        <ArticlesView language={handleLanguage} articles={results.articles} />
      )}
    </div>
  );
};

export default ArticlesPage;
