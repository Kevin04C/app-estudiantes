import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Toggle = ({ text, value, toggle, action }) => {
  return (
    <div className='pomodoro__config-toggle'>
      <p>{text}</p>
      <div
        onClick={() => toggle(action)}
        className={
          value
            ? 'pomodoro__config-toggle-icon pomodoro__config-toggle-icon-active'
            : 'pomodoro__config-toggle-icon'
        }
      >
        {value ? <FaToggleOn /> : <FaToggleOff />}
      </div>
    </div>
  );
};

Toggle.propTypes = {
  text: PropTypes.string,
  value: PropTypes.bool,
  toggle: PropTypes.func,
  action: PropTypes.string,
};
