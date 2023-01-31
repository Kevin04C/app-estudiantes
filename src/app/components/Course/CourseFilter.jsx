import React from 'react';

const CourseFilter = ({ setAll, setPending, setInProgress, setComplete, show }) => {
  return (
    <div className='filter'>
      <button className={`filter__btn ${show === 'all' || '' ? 'active' : ''}`} onClick={setAll}>
        Todos
      </button>
      <span>|</span>
      <button
        className={`filter__btn ${show === 'pending' || '' ? 'active' : ''}`}
        onClick={setPending}
      >
        Pendientes
      </button>
      <span>|</span>
      <button
        className={`filter__btn ${show === 'inProgress' || '' ? 'active' : ''}`}
        onClick={setInProgress}
      >
        Cursando
      </button>
      <span>|</span>
      <button
        className={`filter__btn ${show === 'complete' || '' ? 'active' : ''}`}
        onClick={setComplete}
      >
        Completado
      </button>
    </div>
  );
};

export default CourseFilter;
