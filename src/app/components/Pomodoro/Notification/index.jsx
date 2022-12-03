import toast, { Toaster } from 'react-hot-toast';

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
