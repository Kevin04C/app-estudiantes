import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourses } from '../../../store/courses';
import CardCourse from '../Course/CardCourse';

const CourseModule = () => {
  const { courses } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  console.log(courses);
  return (
    <section className='courses'>
      <div className='courses-header'>
        <h1>Nuevos Cursos</h1>
        <Link to='/app/courses'>Ver más</Link>
      </div>
      <div className='courses-container'>
        {courses.data?.cursos?.slice(0, 2).map((course) => (
          <CardCourse key={course._id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseModule;
