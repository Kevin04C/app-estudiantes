import React from 'react';
import { faker } from '@faker-js/faker';

export const Comment = ({ role, text }) => {
  return (
    <article className='comment-card'>
      <div className='comment-card__head'>
        <img src={faker.image.avatar()} alt='' className='comment-card__avatar' />
        <div className='comment-card__user'>
          <h3 className='comment-card__user__name'>{faker.name.fullName()}</h3>
          <p className='comment-card__user__student'>{role}</p>
        </div>
      </div>
      <div className='comment-card__body'>
        <p className='comment-card__text'>{text}</p>
      </div>
    </article>
  );
};
