import React from 'react';

export const HeaderTareas = ({setview}) => {

  const mostrarFormulario=()=>{
    setview(true);
    
  };
  return (
    <>
        <div className="front-cabecera__tareas">
              <h1 className="front-cabecera__tareas__titulo">Tareas</h1>
              <button 
              onClick={mostrarFormulario} 
              id='btn_tareas' 
              className="front-cabecera__tareas__button">
                Crear Tareas
              </button>
          </div>
    </>
  );
};
