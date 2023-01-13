import React from 'react';
import { BodyContainer } from './BodyContainer';


export const Body = () => {
  return (
    <>
        <div className="front-body">
          <BodyContainer/>
          <div className="front-body__workFinished">
              <p className="front-body__workFinished__titulo">Tareas Terminadas</p>

              <div className="front-body__workFinished__componente">
                <div className="front-body__workFinished__componente__circulo"></div>
                <div className="front-body__workFinished__componente__tarea">
                    <p className="front-body__workFinished__componente__tarea__asignatura">ALGEBRA</p>
                    <p className="front-body__workFinished__componente__tarea__fecha">18 de noviembre</p>
                </div>
                <div className="front-body__workFinished__componente__icono">
                  <i>i</i>
                  
                </div>
              </div>
              <div className="front-body__workFinished__componente">
                <div className="front-body__workFinished__componente__circulo"></div>
                <div className="front-body__workFinished__componente__tarea">
                    <p className="front-body__workFinished__componente__tarea__asignatura">MATEMATICA</p>
                    <p className="front-body__workFinished__componente__tarea__fecha">18 de noviembre</p>
                </div>
                <div className="front-body__workFinished__componente__icono">
                  <i>i</i>
                  
                </div>
              </div>

              <div className="front-body__workFinished__componente">
                <div className="front-body__workFinished__componente__circulo"></div>
                <div className="front-body__workFinished__componente__tarea">
                    <p className="front-body__workFinished__componente__tarea__asignatura">RELIGION</p>
                    <p className="front-body__workFinished__componente__tarea__fecha">18 de noviembre</p>
                </div>
                <div className="front-body__workFinished__componente__icono">
                  <i>i</i>
                  
                </div>
              </div>

          </div>
        </div>
    </>
  );
};


