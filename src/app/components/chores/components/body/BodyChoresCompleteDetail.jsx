import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

export const BodyChoresCompleteDetail = ({ title, description }) => {
  return (
    <div className='front-body__workFinished__componente'>
      <div className='front-body__workFinished__componente__circulo'></div>

      <div className='front-body__workFinished__componente__tarea'>
        <p className='front-body__workFinished__componente__tarea__asignatura'>{title}</p>
        <p className='front-body__workFinished__componente__tarea__fecha'>{description}</p>
      </div>

      <div className='front-body__workFinished__componente__icono'>
        <FaAngleRight />
      </div>
    </div>
  );
};
