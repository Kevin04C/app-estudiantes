import React from 'react';
import { Button } from './Button';

export const ServiceCard = ({ title, text, buttonText }) => {
  return (
    <div className='service-card'>
      <h3 className='service-card__title'>{title}</h3>
      <p className='service-card__paragraph'>{text}</p>
      <Button href='/auth/login' type='primary'>
        {buttonText}
      </Button>
    </div>
  );
};
