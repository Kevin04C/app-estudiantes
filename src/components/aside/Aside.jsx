import React from 'react';
import { NavLink } from 'react-router-dom';
// icons
import { BsBookFill, BsGridFill, BsCalculatorFill } from 'react-icons/bs';
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
          <BsBookFill />
          Cursos
        </NavLink>
        <NavLink
          to='/todos'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsGridFill />
          Todo List
        </NavLink>
        <NavLink
          to='/calculator'
          className={({ isActive }) =>
            isActive ? 'aside__link aside__link--active' : 'aside__link'
          }
        >
          <BsCalculatorFill />
          Calculadora
        </NavLink>
      </div>
    </aside>
  );
};

export default Aside;
