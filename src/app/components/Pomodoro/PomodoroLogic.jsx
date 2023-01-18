import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const PomodoroLogic = () => {
  const DEFAULT_TIMES = [25, 5, 15];
  const [countdown, setCountdown] = useState({
    timerMode: 'POMODORO',
    initialCountdown: DEFAULT_TIMES,
    active: false,
    alarm: false,
    notification: false,
    config: false,
  });

  const SECONDS = 60;

  const [secondsLeft, setSecondsLeft] = useState(
    countdown.initialCountdown[0] * SECONDS,
  );

  const handleSecondLeft = () => {
    setSecondsLeft(() =>
      countdown.timerMode === 'POMODORO'
        ? countdown.initialCountdown[0] * SECONDS
        : countdown.timerMode === 'DESCANSO'
        ? countdown.initialCountdown[1] * SECONDS
        : countdown.initialCountdown[2] * SECONDS,
    );
  };

  const changeMode = () => {
    setCountdown((prev) => ({
      ...prev,
      timerMode:
        prev.timerMode === 'POMODORO'
          ? (prev.timerMode = 'DESCANSO')
          : prev.timerMode === 'DESCANSO'
          ? (prev.timerMode = 'DESCANSO-LARGO')
          : (prev.timerMode = 'POMODORO'),
    }));
    handleSecondLeft();
    document.title = `AppStudent`;
  };

  const toggle = (value) => {
    setCountdown({
      ...countdown,
      [value]: !countdown[value],
    });
  };

  const changeTime = (index, value) => {
    let newInitial = countdown.initialCountdown;
    newInitial[index] = value;
    setCountdown({
      ...countdown,
      initialCountdown: newInitial,
    });
    handleSecondLeft();
  };

  const format = (secondsLeft, minus) => {
    return `${
      Math.floor(Number((secondsLeft - minus) / SECONDS)) < 10 ? '0' : ''
    }${Math.floor((secondsLeft - minus) / SECONDS)}:${
      (secondsLeft - minus) % SECONDS < 10 ? '0' : ''
    }${(secondsLeft - minus) % SECONDS}`;
  };

  const notify = () => {
    toast.success(`${countdown.timerMode.toLowerCase()} ha finalizado`, {
      id: 'notification',
      position: 'top-right',
      duration: 3500,
    });
    toast(
      countdown.timerMode === 'POMODORO' ? 'Felicitaciones' : 'Enhorabuena',
      {
        icon: countdown.timerMode === 'POMODORO' ? '🔥' : '🌟',
        position: 'top-right',
        duration: 2000,
      },
    );
  };

  useEffect(() => {
    if (countdown.active) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
        document.title =
          format(secondsLeft, 1) +
          ` Tiempo de ${countdown.timerMode.toLowerCase()}`;
      }, 1000);

      if (secondsLeft === 0) {
        document.title = `AppStudent | Finalizado ${countdown.timerMode.toLowerCase()}`;
        if (countdown.notification) notify();
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [countdown.active, secondsLeft]);

  return {
    changeMode,
    toggle,
    changeTime,
    format,
    secondsLeft,
    countdown,
  };
};
