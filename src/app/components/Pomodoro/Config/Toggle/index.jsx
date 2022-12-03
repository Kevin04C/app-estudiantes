import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Toggle = ({ text, value, toggle, action }) => {
  return (
    <div>
      <p>{text}</p>
      <div onClick={() => toggle(action)}>
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
