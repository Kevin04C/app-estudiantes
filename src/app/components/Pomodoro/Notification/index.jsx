import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

export const Notification = ({ secondsLeft, countdown }) => {
  toast.success(`${countdown.timerMode} ha finalizado`);
  return (
    <>
      {countdown.alarm && secondsLeft === 0 && (
        <audio autoPlay src='/assets/music/alarm.wav'></audio>
      )}
      {countdown.notification && secondsLeft === 0 && (
        <Toaster position='top-right' />
      )}
    </>
  );
};

Notification.propTypes = {
  secondsLeft: PropTypes.number,
  countdown: PropTypes.object,
};
