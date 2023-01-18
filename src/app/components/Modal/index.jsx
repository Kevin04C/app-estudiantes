import { IoCloseSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

export const Modal = ({ children, toggleActiveModal }) => {
  return (
    <section className='modal'>
      {children}
      <div className='modal__item' onClick={toggleActiveModal}>
        <IoCloseSharp />
      </div>
    </section>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  toggleActiveModal: PropTypes.func,
};
