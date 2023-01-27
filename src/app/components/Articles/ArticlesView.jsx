import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';

const ArticlesView = ({ articles, language }) => {
  return (
    <>
      <div className='articles__header'>
        <h2>No encontraste lo que buscabas? Intenta ser más específico</h2>
        <select
          className='articles__header-lang'
          defaultValue='Idioma'
          onChange={language}
        >
          <option value=''>Idioma</option>
          <option value='es'>Español</option>
          <option value='en'>Inglés</option>
        </select>
      </div>
      <section className='articles__list-results'>
        {articles?.map((art) => (
          <ArticleCard art={art} key={art.pageid} />
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
