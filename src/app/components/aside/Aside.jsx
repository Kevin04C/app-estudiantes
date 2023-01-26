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
import { useDispatch } from 'react-redux';
import { readChoress } from '../../../store/chores/thunks';
const Aside = () => {
  const scrollDirection = useScrollDown();
  const dispatch=useDispatch();
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
          onClick={()=>dispatch(readChoress())}
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
