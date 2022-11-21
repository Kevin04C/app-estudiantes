// import React, { useRef } from 'react';
import { BsBell } from 'react-icons/bs';

// import ProfilePopUp from './ProfilePopUp';

const Notification = () => {
  return (
    <div className='notification'>
      <div className='notification__icon'>
        <BsBell />
      </div>
      {/* <ProfilePopUp refProfile={refProfile} /> */}
    </div>
  );
};

export default Notification;
