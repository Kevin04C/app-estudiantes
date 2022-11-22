import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSearch, urlArticle } from '../../store/search/thunks';

const ArticlesPage = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search);

  const { search } = useParams();

  useEffect(() => {
    dispatch(getSearch(search));
  }, [dispatch, search]);

  return (
    <div className='articles-page'>
      {results.articles.length > 0 && (
        <>
          <h2>{`Resultados de '${search}'...`}</h2>
          <section className='articles__list-results'>
            {results.articles.map((art) => (
              <article key={art.pageid} className='articles__item'>
                <a
                  href={urlArticle(art.pageid)}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <h2>{art.title}</h2>
                </a>
                <p>
                  <span
                    className='articles__item--snippet'
                    dangerouslySetInnerHTML={{
                      __html:
                        window.innerWidth < 500
                          ? art.snippet.substring(0, 90) + '...'
                          : art.snippet + '...',
                    }}
                  ></span>
                </p>
              </article>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default ArticlesPage;
