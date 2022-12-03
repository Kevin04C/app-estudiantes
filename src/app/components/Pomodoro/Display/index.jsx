import PropTypes from 'prop-types';

export const Display = ({ secondsLeft, toggle, active, format }) => {
  return (
    <div>
      <p>{format(secondsLeft, 0)}</p>
      <button onClick={() => toggle('active')}>
        {active ? 'Pausa' : 'Empezar'}
      </button>
    </div>
  );
};

Display.propTypes = {
  toggle: PropTypes.func,
  format: PropTypes.func,
  secondsLeft: PropTypes.number,
  active: PropTypes.bool,
};
