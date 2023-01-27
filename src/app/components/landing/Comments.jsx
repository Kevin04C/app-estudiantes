import React from 'react';
import { Comment } from './Comment';
import comments from './data/comment.json';

export const Comments = () => {
  return (
    <div className='container'>
      <div className='comments'>
        <div className='comments__content'>
          <div className='comments__head'>
            <h3 className='heading secondary'>Comentarios</h3>
            <p className='paragraph secondary'>
              Estos son algunos de los comentarios que dicen los estudiantes sobre la aplicación
            </p>
          </div>
          <div className='comments__list'>
            {comments.map((comment) => (
              <Comment
                key={crypto.randomUUID()}
                avatar={comment.avatar}
                name={comment.name}
                role={comment.role}
                text={comment.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
