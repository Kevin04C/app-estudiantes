import { useModal } from '../../hooks/useModal';
import FormCourse from '../components/Course/FormCourse';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addCourses, editCourse, getCourses, removeCourse } from '../../store/courses';
import CardCourse from '../components/Course/CardCourse';

export const CoursePage = () => {
  const { courses } = useSelector((state) => state.courses);
  console.log(courses);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [id, setId] = useState('');
  const [show, setShow] = useState(courses);
  const [edit, setEdit] = useState(false);
  const [addCourseActive, toggleAddCourseActive] = useModal(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCondition = (e) => {
    setCondition(e.target.value);
  };

  const handleDelete = (id) => {
    dispatch(removeCourse(id));
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const changeCourse = {
      titulo: title,
      descripcion: description,
      estado: condition,
      _id: id,
    };
    toggleAddCourseActive();
    dispatch(editCourse(changeCourse));
  };

  const handleAdd = () => {
    setTitle('');
    setDescription('');
    setCondition('');
    setEdit(false);
    setId('');
    toggleAddCourseActive();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      titulo: title,
      descripcion: description,
      estado: condition,
    };
    setTitle('');
    setDescription('');
    setCondition('');
    dispatch(addCourses(newCourse));
    toggleAddCourseActive();
  };

  //<---- Filters ---->

  const pending = courses?.filter((course) => course.estado === 'PH');

  const inProgress = courses?.filter((course) => course.estado === 'EP');

  const complete = courses?.filter((course) => course.estado === 'FZ');

  const showAll = () => {
    setShow(courses);
  };

  const showPending = () => {
    setShow(pending);
  };

  const showInProgress = () => {
    setShow(inProgress);
  };

  const showComplete = () => {
    setShow(complete);
  };

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch, setShow]);

  return (
    <section className='courses'>
      <h1>Cursos</h1>
      {/*<------- Filter ------->*/}
      <div className='courses-filter'>
        <button onClick={showAll}>Todos</button>
        <span>|</span>
        <button onClick={showPending}>Pendientes</button>
        <span>|</span>
        <button onClick={showInProgress}>Cursando</button>
        <span>|</span>
        <button onClick={showComplete}>Completado</button>
      </div>
      {/*<------ Add Course ------>*/}
      <div className='courses-btn'>
        <button className='courses-btn__add' onClick={handleAdd}>
          <AiOutlinePlus />
        </button>
        <span>Añadir Curso</span>
      </div>
      {/*<------ List of courses ------>*/}
      <section className='courses-container'>
        {courses &&
          courses?.map((course) => (
            <CardCourse
              key={course._id}
              course={course}
              onDelete={() => handleDelete(course._id)}
              onEdit={() => {
                toggleAddCourseActive();
                setId(course._id);
                setEdit(true);
              }}
            />
          ))}
      </section>
      {/*<------ Form Modal ------>*/}
      <FormCourse
        addCourseActive={addCourseActive}
        toggleAddCourseActive={toggleAddCourseActive}
        title={title}
        setTitle={handleTitle}
        description={description}
        setDescription={handleDescription}
        condition={condition}
        setCondition={handleCondition}
        onSubmit={edit ? handleSubmitEdit : handleSubmit}
      />
    </section>
  );
};
