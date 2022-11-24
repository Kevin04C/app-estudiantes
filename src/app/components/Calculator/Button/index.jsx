import PropTypes from 'prop-types';

export const Button = ({ text, handleClick }) => {
  return (
    <button
      className={
        text === 'del'
          ? 'button button__del'
          : text === 'reset'
          ? 'button button__reset'
          : text === '='
          ? 'button button__result'
          : 'button'
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
// text isn't defined in button Prototype because could be string or number
Button.propTypes = {
  handleClick: PropTypes.func,
};
