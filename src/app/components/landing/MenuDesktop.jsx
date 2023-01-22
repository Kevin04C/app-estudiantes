import React from 'react';
import { Button } from './Button';

export const MenuDesktop = ({ linkClass }) => {
  return (
    <ul className='d-nav__links'>
      <li className={linkClass}>
        <a href='#'>¿QUÉ ES?</a>
      </li>
      <li className={linkClass}>
        <a href='#'>¿QUÉ OFRECEMOS?</a>
      </li>
      <li className={linkClass}>
        <a href='#'>COMENTARIOS</a>
      </li>
      <li className={linkClass}>
        <Button href='/auth/login' type='primary'>
          INGRESAR
        </Button>
      </li>
      <li className={linkClass}>
        <Button href='/auth/register' type='secondary'>
          REGISTRARME
        </Button>
      </li>
    </ul>
  );
};
