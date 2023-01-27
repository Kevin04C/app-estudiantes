import React from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from '../components/Articles/ArticleCard';
import { NoArticlesFound } from '../components/Articles/NoArticlesFound';

const ArticlesSaved = () => {
  const savedArts = useSelector((state) => state.articles);
  return (
    <div className='articles'>
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
