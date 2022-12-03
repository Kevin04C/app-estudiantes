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

Button.propTypes = {
  test: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleClick: PropTypes.func,
};
