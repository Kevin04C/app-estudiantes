import PropTypes from 'prop-types';
import { BiRightArrowAlt } from 'react-icons/bi';

export const Button = ({ changeMode, mode, secondsLeft }) => {
  return (
    <button onClick={changeMode}>
      {mode} {secondsLeft === 0 && <BiRightArrowAlt></BiRightArrowAlt>}
    </button>
  );
};

Button.propTypes = {
  changeMode: PropTypes.func,
  mode: PropTypes.string,
  secondsLeft: PropTypes.number,
};
