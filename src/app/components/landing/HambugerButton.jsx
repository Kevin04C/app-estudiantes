import React from 'react';
import { useDispatch } from 'react-redux';
import { toogleMenu } from '../../../store/ui/uiSlice';

export const HambugerButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toogleMenu());
  };

  return (
    <button className='hambuger' onClick={handleClick}>
      <svg
        width='31'
        height='31'
        viewBox='0 0 31 31'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4.5 9H27M12.6125 15.25H27M4.5 15.25H8.2375M4.5 21.5H27'
          stroke='#EEBBC3'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </svg>
    </button>
  );
};
