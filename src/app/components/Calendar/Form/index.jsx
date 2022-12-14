import { IoCloseSharp, IoCheckmarkSharp } from 'react-icons/io5';
import { Toggle } from './Toggle';
import { Input } from './Input';
import PropTypes from 'prop-types';

export const Form = ({
  toggleForm,
  form,
  handleForm,
  handleReminder,
  edit,
  title,
}) => {
  return (
    <article className='calendar-form'>
      <div className='calendar-form-close'>
        <IoCloseSharp onClick={toggleForm} />
        <h3>{title}</h3>
        <IoCheckmarkSharp
          className='calendar-form-yes'
          onClick={() => (edit ? handleReminder('edit') : handleReminder())}
        />
      </div>
      <Input
        type='text'
        placeholder='Título'
        name='title'
        handleForm={handleForm}
        value={form.title}
      />
      <Input
        type='text'
        placeholder='Descripción'
        name='description'
        handleForm={handleForm}
        value={form.description}
      />
      <Input
        type='date'
        name='date'
        value={`${form.date.getFullYear()}-${
          form.date.getMonth() + 1
        }-${form.date.getDate()}`}
        handleForm={handleForm}
      />
      <Toggle
        text='Notificación'
        name='noti'
        value={form.noti}
        handleToggle={handleForm}
      />
    </article>
  );
};

Form.propTypes = {
  toggleForm: PropTypes.func,
  form: PropTypes.object,
  handleForm: PropTypes.func,
  handleReminder: PropTypes.func,
  edit: PropTypes.bool,
  title: PropTypes.string,
};
