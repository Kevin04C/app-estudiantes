import { IoIosArrowBack } from 'react-icons/io';
import PropTypes from 'prop-types';
import { Toggle } from './Toggle';

export const Config = ({ countdown, toggle, changeTime }) => {
  return (
    <div className='pomodoro__config'>
      <div className='pomodoro__config-back' onClick={() => toggle('config')}>
        <IoIosArrowBack />
      </div>
      <h3 className='pomodoro__config-title'>Nivel de Concentración</h3>

      <div className='pomodoro__config-input'>
        <div className='pomodoro__config-input-min'>
          <p>{countdown.initialCountdown[0]} min</p>
          <p>Pomodoro</p>
        </div>
        <input
          className='pomodoro__config-input-range'
          value={countdown.initialCountdown[0]}
          type='range'
          id='vol'
          name='vol'
          min='1'
          max='100'
          step='1'
          onChange={(event) => changeTime(0, Number(event.target.value))}
        ></input>
      </div>

      <div className='pomodoro__config-input'>
        <div className='pomodoro__config-input-min'>
          <p>{countdown.initialCountdown[1]} min</p>
          <p>Descanso</p>
        </div>
        <input
          className='pomodoro__config-input-range'
          value={countdown.initialCountdown[1]}
          type='range'
          id='vol'
          name='vol'
          min='1'
          max='100'
          step='1'
          onChange={(event) => changeTime(1, Number(event.target.value))}
        ></input>
      </div>

      <div className='pomodoro__config-input'>
        <div className='pomodoro__config-input-min'>
          <p>{countdown.initialCountdown[2]} min</p>
          <p>Descanso-Largo</p>
        </div>
        <input
          className='pomodoro__config-input-range'
          type='range'
          value={countdown.initialCountdown[2]}
          id='vol'
          name='vol'
          min='1'
          max='100'
          step='1'
          onChange={(event) => changeTime(2, Number(event.target.value))}
        ></input>
      </div>

      <Toggle
        text='Mostrar Notificacion'
        value={countdown.notification}
        toggle={toggle}
        action='notification'
      />
      <Toggle
        text='Alarma al Completar'
        value={countdown.alarm}
        toggle={toggle}
        action='alarm'
      />
    </div>
  );
};

Config.propTypes = {
  toggle: PropTypes.func,
  changeTime: PropTypes.func,
  countdown: PropTypes.object,
};
