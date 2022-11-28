import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import CoursesCard from '../../components/Course/CoursesCard';

export const CoursePage = () => {
  return (
    <div>
      <Link to='new'>Nuevo</Link>
      <h1>Aún no tienes ningún curso creado</h1>
      <Outlet />
      {/* <CoursesCard /> */}
    </div>
  );
};
