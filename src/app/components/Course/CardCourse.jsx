import { BiTrash, BiEdit } from 'react-icons/bi';

const CardCourse = ({ course, onDelete, onEdit }) => {
  return (
    <article className='card courses__item'>
      <div className='card-over'>
        <p>Estado: {course.estado}</p>
        <h2 className='card-over__title'>{course.titulo}</h2>
        <p>{course.descripcion}</p>
      </div>
      <div className='courses__item-controls'>
        <button className='delete btn' onClick={onDelete}>
          <BiTrash />
        </button>
        <button className='edit btn' onClick={onEdit}>
          <BiEdit />
        </button>
      </div>
    </article>
  );
};

export default CardCourse;
