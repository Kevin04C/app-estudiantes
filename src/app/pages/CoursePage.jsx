import { useModal } from '../../hooks/useModal';
import FormCourse from '../components/Course/FormCourse';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addCourses, editCourse, getCourses, removeCourse } from '../../store/courses';
import CourseList from '../components/Course/CourseList';
import CourseFilter from '../components/Course/CourseFilter';

export const CoursePage = () => {
  const { courses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('');
  const [id, setId] = useState('');

  const [show, setShow] = useState('all');
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
      title,
      description,
      state: condition,
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
    if (condition === '') return;
    const newCourse = {
      title,
      description,
      state: condition,
    };
    setTitle('');
    setDescription('');
    setCondition('');
    dispatch(addCourses(newCourse));
    toggleAddCourseActive();
  };

  const openEdit = (course) => {
    setId(course._id);
    setCondition(course.state);
    setDescription(course.description);
    setTitle(course.title);
    setEdit(true);
    toggleAddCourseActive();
  };

  //<---- Filters ---->
  let showCourses;

  const pending = courses?.filter((course) => course.state === 'TD');

  const inProgress = courses?.filter((course) => course.state === 'IP');

  const complete = courses?.filter((course) => course.state === 'FZ');

  if (show === 'inProgress') {
    showCourses = inProgress;
  } else if (show === 'pending') {
    showCourses = pending;
  } else if (show === 'complete') {
    showCourses = complete;
  } else {
    showCourses = courses;
  }

  const showAll = () => {
    setShow('all');
  };

  const showPending = () => {
    setShow('pending');
  };

  const showInProgress = () => {
    setShow('inProgress');
  };

  const showComplete = () => {
    setShow('complete');
  };

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch, show]);

  return (
    <section className='courses'>
      <h1 className='courses-title'>Cursos</h1>
      {/*<------- Filter ------->*/}
      <CourseFilter
        show={show}
        setAll={showAll}
        setPending={showPending}
        setInProgress={showInProgress}
        setComplete={showComplete}
      />
      {/*<------ Add Course ------>*/}
      <div className='courses-btn'>
        <button className='courses-btn__add' onClick={handleAdd}>
          <AiOutlinePlus />
        </button>
        <span>Añadir Curso</span>
      </div>
      {/*<------ List of courses ------>*/}

      <CourseList courses={showCourses} onEdit={openEdit} onDelete={handleDelete} editable={true} />
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
