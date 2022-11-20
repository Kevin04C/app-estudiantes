import React from 'react';
import { Link } from 'react-router-dom';
// icons
// https://react-icons.github.io/react-icons/icons?name=im
import {
  BsBoxArrowLeft,
  BsFillFilePersonFill,
  BsLightningFill,
  BsPatchQuestionFill,
} from 'react-icons/bs';

const ProfilePopUp = ({ refProfile }) => {
  return (
    <div ref={refProfile} className='profile-pop'>
      <div className='profile-pop__header'>
        <img className='profile-pop__img' src='src/rodrigo.jpeg' alt='' />
        <div className='profile-pop__user-info'>
          <h2 className='profile-pop__name'>Rodrigo Carpio</h2>
          <h2 className='profile-pop__user'>@rodcarpio</h2>
        </div>
      </div>
      <div className='profile-pop__body'>
        <Link className='profile-pop__link'>
          <BsFillFilePersonFill />
          Tu Perfil
        </Link>
        <Link className='profile-pop__link'>
          <BsLightningFill />
          Otras cosas
        </Link>
        <Link className='profile-pop__link'>
          <BsPatchQuestionFill />
          Algo más
        </Link>
      </div>
      <div className='profile-pop__footer'>
        <Link className='profile-pop__link'>
          <BsBoxArrowLeft />
          Cerrar sesión
        </Link>
      </div>
    </div>
  );
};

export default ProfilePopUp;
