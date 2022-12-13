import { Calendar as CalendarDefault } from 'react-calendar';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { Button } from './Button';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import { Form } from './Form';
import { Schedule } from './Schedule';
import PropTypes from 'prop-types';

const Calendar = ({
  view,
  changeView,
  reminders,
  activeForm,
  form,
  toggleForm,
  handleReminder,
  handleForm,
}) => {
  //this logic is right here because depends on react-calendar
  const [current, setCurrent] = useState(new Date());

  const handletitleClassName = (view) => {
    current.setHours(0, 0, 0, 0);
    if (current.getTime() === view.date.getTime() && view.view === 'month')
      return 'current-day';
  };

  const handleTitleContent = (activeStartDate) => {
    return reminders.map((reminder, index) => {
      if (reminder.date.getTime() == activeStartDate.date.getTime()) {
        return (
          <span
            key={reminder.title + 'span' + index}
            className='current-title'
          ></span>
        );
      }
    });
  };
  return (
    <article className='calendar'>
      <div className='calendar-view'>
        <Button text='Calendario' view={view} changeView={changeView} />
        <Button text='Agenda' view={view} changeView={changeView} />
      </div>
      {view !== 'Agenda' && (
        <div className='calendar-calendar'>
          <CalendarDefault
            onChange={setCurrent}
            nextLabel={<GoChevronRight />}
            prevLabel={<GoChevronLeft />}
            prev2Label={null}
            next2Label={null}
            minDetail={'decade'}
            locale='es'
            tileClassName={handletitleClassName}
            tileContent={handleTitleContent}
            value={current}
          />
          {activeForm && (
            <Form
              handleForm={handleForm}
              form={form}
              title='Nuevo Evento'
              handleReminder={handleReminder}
              toggleForm={toggleForm}
            />
          )}
          {!activeForm && (
            <div className='calendar-activeForm' onClick={() => toggleForm()}>
              <AiFillPlusCircle />
            </div>
          )}
        </div>
      )}
      {view === 'Agenda' && (
        <Schedule
          reminders={reminders}
          handleReminder={handleReminder}
          activeForm={activeForm}
          toggleForm={toggleForm}
          handleForm={handleForm}
          form={form}
        />
      )}
    </article>
  );
};

export default Calendar;

Calendar.propTypes = {
  view: PropTypes.string,
  changeView: PropTypes.func,
  reminders: PropTypes.array,
  activeForm: PropTypes.bool,
  form: PropTypes.object,
  toggleForm: PropTypes.func,
  handleReminder: PropTypes.func,
  handleForm: PropTypes.func,
};
