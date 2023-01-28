import { BiTrash, BiEdit } from 'react-icons/bi';

const CardCourse = ({ course, onDelete, onEdit }) => {
  const showCondition = () => {
    if (course?.estado === 'PH') return 'Pendiente';
    if (course?.estado === 'EP') return 'Cursando';
    if (course?.estado === 'FZ') return 'Completo';
  };

  const cardStyle = {
    borderLeft: `${
      (course?.estado === 'PH' && '0.7rem solid #ffffff') ||
      (course?.estado === 'EP' && '0.7rem solid #b8c1ec') ||
      (course?.estado === 'FZ' && '0.7rem solid #eebbc3')
    }`,
  };

  const cardConditionStyle = {
    color: `${
      (course?.estado === 'PH' && '#ffffff') ||
      (course?.estado === 'EP' && '#b8c1ec') ||
      (course?.estado === 'FZ' && '#eebbc3')
    }`,
    fontWeight: '600',
  };

  return (
    <article style={cardStyle} className='card courses__item'>
      <div className='card-over'>
        <p>
          Estado: <span style={cardConditionStyle}>{showCondition()}</span>
        </p>
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
