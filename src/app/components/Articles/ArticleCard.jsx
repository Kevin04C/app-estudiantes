import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { urlArticle } from '../../../store/search/thunks';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import {
  removeArticle,
  saveArticle,
} from '../../../store/articles/articleSlice';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

const ArticleCard = ({ art }) => {
  const dispatch = useDispatch();
  const savedArts = useSelector((state) => state.articles);

  const artData = {
    title: art.title,
    pageid: art.pageid,
    snippet: art.snippet,
  };

  const isAdded = savedArts.find((art) => art.pageid === artData.pageid);

  const icon = isAdded ? (
    <BsFillBookmarkFill className='added' />
  ) : (
    <BsBookmark />
  );

  const handleDelete = () => {
    dispatch(removeArticle(isAdded));
    toast('Removido de artículos!', {
      icon: '👏',
      style: {
        background: '#232946',
        color: '#fff',
      },
    });
  };
  const handleAdd = () => {
    dispatch(saveArticle(artData));
    toast.success('Agregado!', {
      style: {
        background: '#232946',
        color: '#fff',
      },
    });
  };

  return (
    <article key={art.pageid} className='articles__item'>
      <div className='articles__item-header'>
        <a
          href={urlArticle(art.pageid)}
          target='_blank'
          rel='noreferrer noopener'
        >
          <h2>{art.title}</h2>
        </a>
        <button
          className='save--btn'
          onClick={isAdded ? handleDelete : handleAdd}
        >
          <span role='img' aria-label='Article'>
            {icon}
          </span>
        </button>
      </div>
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

ArticleCard.propTypes = {
  art: PropTypes.object.isRequired,
};

export default ArticleCard;
