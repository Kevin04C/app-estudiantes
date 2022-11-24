import React, { useRef } from 'react';
import { GiLightBackpack } from 'react-icons/gi';
import { BiCalculator, BiCalendar } from 'react-icons/bi';
import { IoMdClock } from 'react-icons/io';
import { Modal } from '../Modal';
import Calculator from '../Calculator';
import { useModal } from '../../../hooks/useModal';
import { useScrollDown } from '../../../hooks/useScrollDown';

const Backpack = () => {
  const scrollDirection = useScrollDown();
  const [calculatorActiveModal, toggleActiveModal] = useModal(false);

  // const refBackpackIcon = useRef('');
  const refBackpackItems = useRef('');
  const handleClick = () => {
    // refBackpackIcon.current.classList.toggle('backpack__icon--on');
    refBackpackItems.current.classList.toggle('backpack__items--on');
  };
  return (
    <div
      className={`backpack ${
        scrollDirection === 'down' ? 'backpack--down' : ''
      }`}
    >
      <div className='backpack__content'>
        <div
          onClick={handleClick}
          // ref={refBackpackIcon}
          className='backpack__icon'
        >
          <GiLightBackpack />
        </div>
        <ul ref={refBackpackItems} className='backpack__items '>
          <li className='backpack__item backpack__item--clock'>
            <IoMdClock />
            <span className='backpack__item-tooltip'>Cronómetro</span>
          </li>
          <li className='backpack__item backpack__item--calendar'>
            <BiCalendar />
            <span className='backpack__item-tooltip'>Calendario</span>
          </li>
          <li
            className='backpack__item backpack__item--calculator'
            onClick={toggleActiveModal}
          >
            <BiCalculator />
            <span className='backpack__item-tooltip'>Calculadora</span>
          </li>
        </ul>
      </div>
      {calculatorActiveModal && (
        <Modal toggleActiveModal={toggleActiveModal}>
          <Calculator></Calculator>
        </Modal>
      )}
    </div>
  );
};

export default Backpack;
