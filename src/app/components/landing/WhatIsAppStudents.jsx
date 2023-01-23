import React from 'react';

export const WhatIsAppStudents = () => {
  return (
    <div className='container center'>
      <div className='what-is-app-student'>
        <div className='what-is-app-student__content'>
          <div className='what-is-app-student__texts'>
            <h3 className='heading'>¿QUÉ ES APP STUDENTS?</h3>
            <p className='paragraph secondary'>
              App Students es una aplicación pensada en tí estudiante en la que podrás tener en un
              mismo lugar todas las herramientas que necesites para tus actividades académicas desde
              calculadora, calendario, administrador de tareas, cursos, pomodoro, y muchas mas cosas
              que necesitas para convertirte en la mejor versión de ti mismo totalmente gratis .
            </p>
          </div>
          <picture className='what-is-app-student__illustration'>
            <img src='/assets/svgs/about.svg' alt='app students' />
          </picture>
        </div>
      </div>
    </div>
  );
};
