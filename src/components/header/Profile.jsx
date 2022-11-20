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
      <img
        ref={refProfileImg}
        className='profile__img'
        src='src/rodrigo.jpeg'
        alt='rodrigo'
        onClick={handleClick}
      />
      <ProfilePopUp refProfile={refProfile} />
    </div>
  );
};

export default Profile;
