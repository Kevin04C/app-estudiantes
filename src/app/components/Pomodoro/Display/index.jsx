import PropTypes from 'prop-types';

export const Display = ({ secondsLeft, toggle, active, format, mode }) => {
  return (
    <div className='pomodoro__display'>
      <div
        className={
          mode === 'POMODORO'
            ? 'pomodoro__display-circle pomodoro__display-active'
            : 'pomodoro__display-circle'
        }
      >
        <p className='pomodoro__display-time'>{format(secondsLeft, 0)}</p>
        <button
          className='pomodoro__display-button'
          onClick={() => toggle('active')}
        >
          {active ? 'PARAR' : 'EMPEZAR'}
        </button>
      </div>
    </div>
  );
};

Display.propTypes = {
  toggle: PropTypes.func,
  format: PropTypes.func,
  secondsLeft: PropTypes.number,
  active: PropTypes.bool,
  mode: PropTypes.string,
};
