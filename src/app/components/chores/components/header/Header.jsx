import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderTareas } from './HeaderTareas';
import { getGreeting } from '../../../../helpers/greeting';

export const Header = ({ setview, setFormulario }) => {
  const urlImg = `/img/welcome.png`;
  const { name } = useSelector((state) => state.auth.user);
  const [greeting, setGreting] = useState('');

  const updateTime = () => {
    const date = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const time = date.toLocaleTimeString('en-US', options);
    return time;
  };

  useLayoutEffect(() => {
    setGreting(getGreeting());
  }, []);
  return (
    <>
      <div className='front-cabecera'>
        <div className='front-cabecera__welcome' style={{ marginBottom: '16px' }}>
          <div className='front-cabecera__welcome__1'>
            <h1 className='front-cabecera__welcome__1__titulo mb-2'>
              {greeting}, <b className='capitalize'>{name}</b>{' '}
            </h1>
            <p className='front-cabecera__welcome__1__contenido'>
              Bienvenidos a la seccion de Tareas, Registre las tareas que desee realizar y cuando
              las termine, marquelas como completado.{' '}
            </p>
            <p className='front-cabecera__welcome__1__hora'>{updateTime()}</p>
          </div>

          <img className='front-cabecera__welcome__img' src={urlImg} alt='welcome' />
        </div>
        <HeaderTareas setview={setview} setFormulario={setFormulario} />
      </div>
    </>
  );
};
