import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderTareas } from './HeaderTareas';
import {getGreeting} from '../../../../helpers/greeting';

export const Header = ({setview,setFormulario}) => {

  const urlImg=`../../../../../public/img/welcome.png`;
  const {name}=useSelector(state=>state.auth.user)
  const [greeting, setGreting] = useState('');

  useLayoutEffect(() => {
    setGreting(getGreeting());
  }, []);
  return (
    <>
        <div className="front-cabecera">

          <div className="front-cabecera__welcome">

              <div className="front-cabecera__welcome__1">

                <h1 className="front-cabecera__welcome__1__titulo">{greeting},<small className="front-cabecera__welcome__1__titulo__small">{name}</small></h1>
                <p className="front-cabecera__welcome__1__contenido">Bienvenido a la seccion de tareas, aqui podras selecionar que tareas deseas realizar.</p>
                <p className="front-cabecera__welcome__1__hora">01:00pm</p>
                
              </div>

              <img className='front-cabecera__welcome__img' src={urlImg} alt="welcome" />

          </div>

          <HeaderTareas setview={setview} setFormulario={setFormulario}/>

        </div>
    </>
  );
};


