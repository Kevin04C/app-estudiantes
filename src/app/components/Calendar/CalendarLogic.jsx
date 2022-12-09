/* eslint-disable no-unused-vars */
import { useState } from 'react';

export const CalendarLogic = () => {
  const [reminders, setReminders] = useState([]);

  return {
    reminders,
  };
};
