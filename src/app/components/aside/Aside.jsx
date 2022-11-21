import React from 'react';
import { NavLink } from 'react-router-dom';
// icons
import { BsBook, BsListUl, BsSearch } from 'react-icons/bs';
const Aside = () => {
  return (
    <aside className='aside'>
      <div className='aside__links'>
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
          to='/todos'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsListUl />
          Tareas
        </NavLink>
        <NavLink
          to='/calculator'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsSearch />
          Buscar
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
