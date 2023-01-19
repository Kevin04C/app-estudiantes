import React from 'react';
import { NavLink } from 'react-router-dom';
// icons
import {
  BsBook,
  BsListUl,
  BsSearch,
  BsHouse,
  BsFileEarmarkText,
} from 'react-icons/bs';
import { useScrollDown } from '../../../hooks/useScrollDown';
const Aside = () => {
  const scrollDirection = useScrollDown();
  return (
    <aside
      className={`aside ${
        scrollDirection === 'down' ? 'aside--down' : 'aside--up'
      }`}
    >
      <div className='aside__links'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsHouse />
          Inicio
        </NavLink>

        <NavLink
          to='/courses'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsBook />
          Cursos
        </NavLink>
        <NavLink
          to='/chores'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsListUl />
          Tareas
        </NavLink>
        <NavLink
          to='/search?q='
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsSearch />
          Buscar
        </NavLink>
        <NavLink
          to='/articles'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsFileEarmarkText />
          Artículos
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
