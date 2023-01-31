import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ArticleCard from '../components/Articles/ArticleCard';
import { NoArticlesFound } from '../components/Articles/NoArticlesFound';

const ArticlesSaved = () => {
  const savedArts = useSelector((state) => state.articles);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='articles'>
      <div className='filter'>
        <button
          className={`filter__btn ${location.pathname === '/app/search' ? 'active' : ''}`}
          onClick={() => navigate('/app/search?q=')}
        >
          Búsqueda
        </button>
        <span>|</span>
        <button
          className={`filter__btn ${location.pathname === '/app/articles' ? 'active' : ''}`}
          onClick={() => navigate('/app/articles')}
        >
          Guardado
        </button>
      </div>
      {savedArts.length === 0 ? (
        <NoArticlesFound />
      ) : (
        <section className='articles__list-results'>
          {savedArts?.map((art) => (
            <ArticleCard art={art} key={art.pageid} />
          ))}
        </section>
      )}
    </div>
  );
};

export default ArticlesSaved;
