import React from 'react';
import { HeaderTareas } from './HeaderTareas';


export const Header = ({setview}) => {
  return (
    <>
        <div className="front-cabecera">
          <div className="front-cabecera__welcome">
              <div className="front-cabecera__welcome__1">
                <h1 className="front-cabecera__welcome__1__titulo">Buenos Dias,<small className="front-cabecera__welcome__1__titulo__small">FRANZITO</small></h1>
                <p className="front-cabecera__welcome__1__contenido">Bienvenido a la seccion de tareas, aqui podras selecionar que tareas deseas realizar.</p>
                <p className="front-cabecera__welcome__1__hora">11:00am</p>
              </div>
              <img src="" alt="welcome" />
          </div>
          <HeaderTareas setview={setview} />
        </div>
    </>
  );
};


