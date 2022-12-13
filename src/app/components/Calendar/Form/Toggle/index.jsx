import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Toggle = ({ text, value, name, handleToggle }) => {
  return (
    <div className='calendar-form-toggle'>
      <p>{text}</p>

      <div
        className={value ? 'calendar-form-toggle-active' : ''}
        onClick={() => handleToggle(name)}
      >
        {value ? <FaToggleOn /> : <FaToggleOff />}
      </div>
    </div>
  );
};

Toggle.propTypes = {
  text: PropTypes.string,
  value: PropTypes.bool,
  name: PropTypes.string,
  handleToggle: PropTypes.func,
};
