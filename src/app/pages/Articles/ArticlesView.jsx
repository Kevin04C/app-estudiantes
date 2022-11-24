import PropTypes from 'prop-types';
import { urlArticle } from '../../../store/search/thunks';

const ArticlesView = ({ articles, language }) => {
  return (
    <>
      <div className='articles__header'>
        <h2>No encontraste lo que buscabas? Intenta ser más específico</h2>
        <select
          className='articles__header--lang'
          defaultValue='Idioma'
          onChange={language}
        >
          <option value=''>Idioma</option>
          <option value='es'>Español</option>
          <option value='en'>Inglés</option>
        </select>
      </div>
      <section className='articles__list-results'>
        {articles.map((art) => (
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
  );
};

ArticlesView.propTypes = {
  articles: PropTypes.array.isRequired,
  language: PropTypes.func,
};

export default ArticlesView;
