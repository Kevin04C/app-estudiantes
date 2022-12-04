import PropTypes from 'prop-types';

export const Notification = ({ secondsLeft, countdown }) => {
  return (
    <>
      {countdown.alarm && secondsLeft === 0 && (
        <audio autoPlay src='/assets/music/alarm.wav'></audio>
      )}
    </>
  );
};

Notification.propTypes = {
  secondsLeft: PropTypes.number,
  countdown: PropTypes.object,
};
