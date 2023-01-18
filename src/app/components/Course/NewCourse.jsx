import React from 'react';

const NewCourse = () => {
  return (
    <form className='course-new'>
      <input className='course-new__name' type='text' />
      <button className='course-new__submit' type='submit'>
        Guardar
      </button>
    </form>
  );
};

export default NewCourse;
