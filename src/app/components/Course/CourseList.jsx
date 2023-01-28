import React from 'react';
import CardCourse from './CardCourse';

const CourseList = ({ courses, onEdit, onDelete }) => {
  return (
    <section className='courses-container'>
      {courses &&
        courses?.map((course) => (
          <CardCourse
            key={course._id}
            course={course}
            onDelete={() => onDelete(course._id)}
            onEdit={() => onEdit(course._id)}
          />
        ))}
    </section>
  );
};

export default CourseList;
