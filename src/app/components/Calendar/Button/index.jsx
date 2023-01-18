import PropTypes from 'prop-types';

export const Button = ({ text, changeView, view }) => {
  return (
    <button
      className={
        view === text
          ? 'calendar-view-button calendar-view-button-active'
          : 'calendar-view-button calendar-view'
      }
      onClick={changeView}
    >
      {text}
    </button>
  );
};

Button.prototypes = {
  text: PropTypes.string,
  changeView: PropTypes.func,
};
