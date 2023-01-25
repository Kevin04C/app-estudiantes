import { BiTrash } from 'react-icons/bi';

const CardCourse = ({ course, onClick }) => {
  return (
    <article className='card courses__item'>
      <div className='card-over'>
        <p>Estado: {course.estado}</p>
        <h2 className='card-over__title'>{course.titulo}</h2>
        <p>{course.descripcion}</p>
      </div>
      <div className='courses__item-controls'>
        <button className='delete-btn' onClick={onClick}>
          <BiTrash />
        </button>
      </div>
    </article>
  );
};

export default CardCourse;
