import PropTypes from 'prop-types';

export const Input = ({ value, text, changeTime }) => {
  return (
    <div>
      <div>
        <p>{value} min</p>
        <p>{text}</p>
      </div>
      <input
        type='range'
        id='vol'
        name='vol'
        min='0'
        max='100'
        step={1}
        onChange={(event) =>
          changeTime(
            text === 'Pomodoro' ? 0 : text === 'Descanso' ? 1 : 2,
            Number(event.target.value),
          )
        }
      ></input>
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.number,
  text: PropTypes.string,
  changeTime: PropTypes.func,
};
