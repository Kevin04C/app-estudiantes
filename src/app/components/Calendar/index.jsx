import React, { useState } from 'react';
import { Calendar as CalendarDefault } from 'react-calendar';

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <article>
      <CalendarDefault onChange={onChange} value={value} />
    </article>
  );
};

export default Calendar;
