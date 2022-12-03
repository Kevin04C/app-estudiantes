import { IoIosArrowBack } from 'react-icons/io';
import PropTypes from 'prop-types';
import { Input } from './input';
import { Toggle } from './Toggle';

export const Config = ({ countdown, toggle, changeTime }) => {
  return (
    <div>
      <div onClick={() => toggle('config')}>
        <IoIosArrowBack />
      </div>
      <h3>Nivel de Concentración</h3>
      <Input
        value={countdown.initialCountdown[0]}
        text='Pomodoro'
        changeTime={changeTime}
      />
      <Input
        value={countdown.initialCountdown[1]}
        text='Descanso'
        changeTime={changeTime}
      />
      <Input
        value={countdown.initialCountdown[2]}
        text='Descanso-Largo'
        changeTime={changeTime}
      />
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
