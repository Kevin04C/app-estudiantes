import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Toggle = ({ reminder, text }) => {
  return (
    <div className='calendar-schedule-toggle'>
      <p>{text}</p>

      <div className={reminder ? 'calendar-schedule-toggle-active' : ''}>
        {reminder ? <FaToggleOn /> : <FaToggleOff />}
      </div>
    </div>
  );
};

Toggle.prototypes = {
  reminder: PropTypes.array,
  text: PropTypes.string,
};
