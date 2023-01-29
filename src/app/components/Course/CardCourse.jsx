import { BiTrash, BiEdit } from 'react-icons/bi';

const CardCourse = ({ course, onDelete, onEdit, editable }) => {
  const showCondition = () => {
    if (course?.state === 'TD') return 'Pendiente';
    if (course?.state === 'IP') return 'Cursando';
    if (course?.state === 'FZ') return 'Completo';
  };

  const cardStyle = {
    borderLeft: `${
      (course?.state === 'TD' && '0.7rem solid #ffffff') ||
      (course?.state === 'IP' && '0.7rem solid #b8c1ec') ||
      (course?.state === 'FZ' && '0.7rem solid #eebbc3')
    }`,
  };

  const cardConditionStyle = {
    color: `${
      (course?.state === 'TD' && '#ffffff') ||
      (course?.state === 'IP' && '#b8c1ec') ||
      (course?.state === 'FZ' && '#eebbc3')
    }`,
    fontWeight: '600',
  };

  return (
    <article style={cardStyle} className='card courses__item'>
      <div className='card-over'>
        <p>
          Estado: <span style={cardConditionStyle}>{showCondition()}</span>
        </p>
        <h2 className='card-over__title'>{course.title}</h2>
        <p>{course.description}</p>
      </div>
      <div className='courses__item-controls'>
        <button className='delete btn' onClick={onDelete}>
          <BiTrash />
        </button>
        {editable && (
          <button className='edit btn' onClick={onEdit}>
            <BiEdit />
          </button>
        )}
      </div>
    </article>
  );
};

export default CardCourse;
