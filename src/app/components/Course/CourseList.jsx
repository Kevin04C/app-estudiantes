import React from 'react';
import CardCourse from './CardCourse';

const CourseList = ({ courses, onEdit, onDelete, editable }) => {
  return (
    <section className='courses-container'>
      {courses &&
        courses?.map((course) => (
          <CardCourse
            key={course._id}
            course={course}
            onDelete={() => onDelete(course._id)}
            onEdit={() => onEdit(course)}
            editable={editable}
          />
        ))}
    </section>
  );
};

export default CourseList;
