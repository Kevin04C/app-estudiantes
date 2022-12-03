import PropTypes from 'prop-types';
import { Display } from './Display';
import { Button } from './Button';
import { GoGear } from 'react-icons/go';
import { Config } from './Config';

const Pomodoro = ({
  changeMode,
  toggle,
  secondsLeft,
  countdown,
  format,
  changeTime,
}) => {
  return (
    <article>
      {!countdown.config && (
        <div>
          <Display
            secondsLeft={secondsLeft}
            toggle={toggle}
            format={format}
            active={countdown.active}
          ></Display>
          <div onClick={() => toggle('config')}>
            <GoGear></GoGear>
          </div>
          <Button
            changeMode={changeMode}
            mode={countdown.timerMode}
            secondsLeft={secondsLeft}
          ></Button>
        </div>
      )}
      {countdown.config && (
        <Config
          toggle={toggle}
          changeTime={changeTime}
          countdown={countdown}
        ></Config>
      )}
    </article>
  );
};

Pomodoro.propTypes = {
  changeMode: PropTypes.func,
  changeTime: PropTypes.func,
  secondsLeft: PropTypes.number,
  countdown: PropTypes.object,
  format: PropTypes.func,
  toggle: PropTypes.func,
};

export default Pomodoro;
