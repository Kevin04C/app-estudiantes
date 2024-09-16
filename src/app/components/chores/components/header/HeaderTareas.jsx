import React from 'react';

export const HeaderTareas = ({ setview, setFormulario }) => {
  const mostrarFormulario = () => {
    setview(true);
    setFormulario('crear');
  };

  return (
    <div>
      {/* <div className='front-cabecera__tareas'>
        <h1 className='front-cabecera__tareas__titulo'>Tareas</h1> */}

      <button onClick={mostrarFormulario} id='btn_tareas' className='as-btn-primary'>
        Nueva tarea
      </button>
      {/* </div> */}
    </div>
  );
};
