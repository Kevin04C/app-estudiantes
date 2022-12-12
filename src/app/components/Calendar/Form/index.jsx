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
}) => {
  return (
    <article>
      <div>
        <IoCloseSharp onClick={toggleForm} />
        <IoCheckmarkSharp
          onClick={() => (edit ? handleReminder('edit') : handleReminder())}
        />
      </div>
      <Input
        type='text'
        placeholder='Titulo'
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

      <div>
        <Toggle
          text='Notificación'
          name='noti'
          value={form.noti}
          handleToggle={handleForm}
        />
      </div>
    </article>
  );
};

Form.propTypes = {
  toggleForm: PropTypes.func,
  form: PropTypes.object,
  handleForm: PropTypes.func,
  handleReminder: PropTypes.func,
  edit: PropTypes.bool,
};
