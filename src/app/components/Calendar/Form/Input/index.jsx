import { MdTitle } from 'react-icons/md';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineCalendar } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const Input = ({ type, placeholder, handleForm, name, value }) => {
  return (
    <div className='calendar-form-wrapper'>
      <input
        className='calendar-form-wrapper-input'
        type={type}
        placeholder={placeholder}
        onChange={(event) => handleForm(name, event.target.value)}
        value={value}
      />
      {placeholder === 'Título' ? (
        <MdTitle />
      ) : placeholder === 'Descripción' ? (
        <HiMenuAlt2 />
      ) : (
        <AiOutlineCalendar />
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleForm: PropTypes.func,
  name: PropTypes.string,
};
