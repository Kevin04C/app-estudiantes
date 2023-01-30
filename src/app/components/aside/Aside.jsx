import React from 'react';
import { NavLink } from 'react-router-dom';
// icons
import { BsBook, BsListUl, BsSearch, BsHouse, BsFileEarmarkText } from 'react-icons/bs';
import { useScrollDown } from '../../../hooks/useScrollDown';
import { useDispatch } from 'react-redux';
import { readChoress, viewCompleteChores } from '../../../store/chores/thunks';
const Aside = () => {
  const scrollDirection = useScrollDown();
  const dispatch=useDispatch();
  return (
    <aside className={`aside ${scrollDirection === 'down' ? 'aside--down' : 'aside--up'}`}>
      <div className='aside__links'>
        <NavLink
          to='/app/'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsHouse />
          Inicio
        </NavLink>

        <NavLink
          to='/app/courses'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsBook />
          Cursos
        </NavLink>
        <NavLink
          onClick={()=>{
            dispatch(readChoress());
            dispatch(viewCompleteChores());
          }}
          to='/app/chores'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsListUl />
          Tareas
        </NavLink>
        <NavLink
          to='/app/search?q='
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsSearch />
          Buscar
        </NavLink>
        <NavLink
          to='/app/articles'
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
