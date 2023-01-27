import React from 'react';
import { ServiceCard } from './ServiceCard';
import services from './data/services.json';

export const Services = () => {
  return (
    <div className='container'>
      <div className='services'>
        <div className='services__content'>
          <div className='services__head'>
            <h2 className='heading primary'>¿QUE OFRECEMOS?</h2>
            <p className='paragraph primary'>
              Todo esto es lo que te ofrecemos al utilizar nuestra aplicación totalmente ¡GRATIS!
            </p>
          </div>
          <div className='services__list'>
            {services.map((service) => (
              <ServiceCard
                key={crypto.randomUUID()}
                title={service.title}
                text={service.text}
                buttonText={service['button-text']}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
