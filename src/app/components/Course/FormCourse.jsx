import React from 'react';
import { Modal } from '../Modal';

const FormCourse = ({
  onSubmit,
  title,
  setTitle,
  description,
  setDescription,
  condition,
  setCondition,
  addCourseActive,
  toggleAddCourseActive,
}) => {
  return (
    <>
      {addCourseActive && (
        <Modal toggleActiveModal={toggleAddCourseActive}>
          <form className='courses-form' onSubmit={onSubmit}>
            {/*<------ Title ------>*/}

            <input
              type='text'
              name='titulo'
              placeholder='Título'
              onChange={setTitle}
              value={title}
            />
            {/*<------ Description ------>*/}

            <textarea
              name='descripcion'
              placeholder='Descripcion'
              onChange={setDescription}
              value={description}
            />
            {/*<------ Condition ------>*/}

            <select name='estado' onChange={setCondition} value={condition}>
              <option defaultValue=''>Estado</option>
              <option value='TD'>Pendiente</option>
              <option value='IP'>Cursando</option>
              <option value='FZ'>Completado</option>
            </select>
            <button type='submit' className='courses-form__submit'>
              Guardar
            </button>
          </form>
        </Modal>
      )}
    </>
  );
};

export default FormCourse;
