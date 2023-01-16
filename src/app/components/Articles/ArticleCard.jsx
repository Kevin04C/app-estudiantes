import React from 'react';
import { urlArticle } from '../../../store/search/thunks';

const ArticleCard = ({ art }) => {
  return (
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
          className='articles__item-snippet'
          dangerouslySetInnerHTML={{
            __html: art.snippet,
          }}
        ></span>
      </p>
    </article>
  );
};

export default ArticleCard;
