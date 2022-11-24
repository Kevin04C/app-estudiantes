import React, { useEffect, useRef } from 'react';
import { BsBell } from 'react-icons/bs';
import NotificationPopUp from './NotificationPopUp';

const Notification = () => {
  const handlePopStopPropagation = (e) => e.stopPropagation();
  const refNotification = useRef();
  const refNotificationIcon = useRef();
  const handleClick = () => {
    refNotification.current.classList.toggle('notification-pop--on');
    refNotificationIcon.current.classList.toggle('notification__icon--on');
  };
  useEffect(() => {
    const closePopUp = (e) => {
      if (e.path[0] !== refNotificationIcon.current) {
        refNotification.current.classList.remove('notification-pop--on');
        refNotificationIcon.current.classList.remove('notification__icon--on');
      }
    };
    window.addEventListener('click', closePopUp);
    return () => {
      window.removeEventListener('click', closePopUp);
    };
  }, []);
  return (
    <div className='notification' onClick={handlePopStopPropagation}>
      <span className='notification__true' />
      <div
        ref={refNotificationIcon}
        className='notification__icon'
        onClick={handleClick}
      >
        <BsBell />
      </div>
      <NotificationPopUp refNotification={refNotification} />
    </div>
  );
};

export default Notification;
