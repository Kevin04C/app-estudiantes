import React, { useRef } from 'react';
import ProfilePopUp from './ProfilePopUp';

const Profile = () => {
  const refProfile = useRef();
  const refProfileImg = useRef();
  const handleClick = () => {
    refProfile.current.classList.toggle('profile-pop--on');
    refProfileImg.current.classList.toggle('profile__img--on');
  };
  return (
    <div className='profile'>
      <div className='profile__icon'>
        <img
          ref={refProfileImg}
          className='profile__img'
          src='../public/assets/rodrigo.jpeg'
          alt='rodrigo'
          onClick={handleClick}
        />
      </div>
      <ProfilePopUp refProfile={refProfile} />
    </div>
  );
};

export default Profile;
