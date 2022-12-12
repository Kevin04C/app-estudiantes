import PropTypes from 'prop-types';

export const Button = ({ text, changeView }) => {
  return <button onClick={changeView}>{text}</button>;
};

Button.prototypes = {
  text: PropTypes.string,
  changeView: PropTypes.func,
};
