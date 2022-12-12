import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Toggle = ({ reminder, text }) => {
  return (
    <div>
      <p>{text}</p>

      <div>{reminder ? <FaToggleOn /> : <FaToggleOff />}</div>
    </div>
  );
};

Toggle.prototypes = {
  reminder: PropTypes.array,
  text: PropTypes.string,
};
