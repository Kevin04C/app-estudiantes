import { AiOutlineEdit } from 'react-icons/ai';
import { TfiTrash } from 'react-icons/tfi';
import { Toggle } from '../Schedule/Toggle';
import { Form } from '../Form';
import PropTypes from 'prop-types';

export const Schedule = ({
  reminders,
  handleReminder,
  activeForm,
  toggleForm,
  handleForm,
  form,
}) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div>
      {reminders &&
        reminders.map((reminder, index) => (
          <div key={reminder.title + index}>
            <h3>{reminder.title === '' ? '(Sin título)' : reminder.title}</h3>
            <h4>{reminder.date.toLocaleDateString('es', options)}</h4>
            <p>{reminder.description}</p>
            <Toggle reminder={reminder.noti} text='Notificación' />
            <div>
              <div onClick={() => toggleForm(reminder)}>
                <AiOutlineEdit />
              </div>

              <div onClick={() => handleReminder('delete', index)}>
                <TfiTrash />
              </div>
            </div>
          </div>
        ))}
      {activeForm && (
        <Form
          toggleForm={toggleForm}
          form={form}
          handleReminder={handleReminder}
          handleForm={handleForm}
          edit
        />
      )}
    </div>
  );
};

Schedule.propTypes = {
  reminders: PropTypes.array,
  handleReminder: PropTypes.func,
  activeForm: PropTypes.bool,
  toggleForm: PropTypes.func,
  handleForm: PropTypes.func,
  form: PropTypes.object,
};
