import PropTypes from 'prop-types';

export const Confirm = ({ text, close, handleReminder, index }) => {
  return (
    <article className='calendar-schedule-confirm'>
      <div className='calendar-schedule-confirm-alert'>
        <h3>{text}</h3>
        <div className='calendar-schedule-confirm-wrapper'>
          <button
            className='calendar-schedule-confirm-button calendar-schedule-confirm-close'
            onClick={close}
          >
            Cancelar
          </button>
          <button
            className='calendar-schedule-confirm-button calendar-schedule-confirm-confirm'
            onClick={() => {
              handleReminder('delete', index);
              close();
            }}
          >
            Confirmar
          </button>
        </div>
      </div>
    </article>
  );
};

Confirm.propTypes = {
  text: PropTypes.string,
  close: PropTypes.func,
  index: PropTypes.number,
  handleReminder: PropTypes.func,
};
