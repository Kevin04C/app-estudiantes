import React, { useEffect, useRef } from 'react';
import ProfilePopUp from './ProfilePopUp';

const Profile = () => {
  const handlePopStopPropagation = (e) => e.stopPropagation();
  const refProfile = useRef();
  const refProfileImg = useRef();
  const handleClick = () => {
    refProfile.current.classList.toggle('profile-pop--on');
    refProfileImg.current.classList.toggle('profile__img--on');
  };
  useEffect(() => {
    const closePopUp = (e) => {
      if (e.path[0] !== refProfileImg.current) {
        refProfile.current.classList.remove('profile-pop--on');
        refProfileImg.current.classList.remove('profile__img--on');
      }
    };
    window.addEventListener('click', closePopUp);
    return () => {
      window.removeEventListener('click', closePopUp);
    };
  }, []);

  return (
    <div className='profile' onClick={handlePopStopPropagation}>
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
      {/* // 'PePePePePePePePEPE' */}
    </div>
  );
};

export default Profile;
