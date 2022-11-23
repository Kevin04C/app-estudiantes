import React from 'react';

const NotificationPopUp = ({ refNotification }) => {
  return (
    <div ref={refNotification} className='notification-pop'>
      <div className='notification-pop__header'>
        <h2>Notificaciones</h2>
      </div>
      <ul className='notification-pop__list'>
        <li className='notification-pop__item'>
          Notificación 1 Lorem ipsum dolor sit.
        </li>
        <li className='notification-pop__item'>Notificación 2 Lorem ipsum .</li>
        <li className='notification-pop__item'>
          Notificación 3 Lorem ipsum dolor.
        </li>
      </ul>
    </div>
  );
};

export default NotificationPopUp;
