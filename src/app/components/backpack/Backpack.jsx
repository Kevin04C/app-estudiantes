import React, { useRef } from 'react';
import { GiLightBackpack } from 'react-icons/gi';
import { BiCalculator, BiCalendar } from 'react-icons/bi';
import { IoMdClock } from 'react-icons/io';
import { Modal } from '../Modal';
import Calculator from '../Calculator';
import Pomodoro from '../Pomodoro';
import { Notification } from '../Pomodoro/Notification';
import { useModal } from '../../../hooks/useModal';
import { useScrollDown } from '../../../hooks/useScrollDown';
import { PomodoroLogic } from '../Pomodoro/PomodoroLogic';

const Backpack = () => {
  const scrollDirection = useScrollDown();
  const [calculatorActive, toggleCalculatorActive] = useModal(false);
  const [pomodoroActive, togglePomodoroActive] = useModal(false);
  const { changeMode, format, toggle, changeTime, secondsLeft, countdown } =
    PomodoroLogic();

  const refBackpackIcon = useRef('');
  const refBackpackItems = useRef('');
  const handleClick = () => {
    refBackpackIcon.current.classList.toggle('backpack__icon--on');
    refBackpackItems.current.classList.toggle('backpack__items--on');
  };

  return (
    <div
      className={`backpack ${
        scrollDirection === 'down' ? 'backpack--down' : null
      }`}
    >
      <div className='backpack__content '>
        <div
          onClick={handleClick}
          ref={refBackpackIcon}
          className='backpack__icon as-btn-primary'
        >
          <GiLightBackpack />
        </div>
        <ul ref={refBackpackItems} className='backpack__items '>
          <li
            className='backpack__item backpack__item--clock'
            onClick={togglePomodoroActive}
          >
            <IoMdClock />
            <span className='backpack__item-tooltip'>Cronómetro</span>
          </li>
          <li className='backpack__item backpack__item--calendar'>
            <BiCalendar />
            <span className='backpack__item-tooltip'>Calendario</span>
          </li>
          <li
            className='backpack__item backpack__item--calculator'
            onClick={toggleCalculatorActive}
          >
            <BiCalculator />
            <span className='backpack__item-tooltip'>Calculadora</span>
          </li>
        </ul>
      </div>
      {calculatorActive && (
        <Modal toggleActiveModal={toggleCalculatorActive}>
          <Calculator></Calculator>
        </Modal>
      )}
      {pomodoroActive && (
        <Modal toggleActiveModal={togglePomodoroActive}>
          <Pomodoro
            changeMode={changeMode}
            changeTime={changeTime}
            format={format}
            toggle={toggle}
            secondsLeft={secondsLeft}
            countdown={countdown}
          ></Pomodoro>
        </Modal>
      )}
      <Notification
        secondsLeft={secondsLeft}
        countdown={countdown}
      ></Notification>
    </div>
  );
};

export default Backpack;
