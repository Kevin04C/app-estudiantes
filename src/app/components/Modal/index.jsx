import PropTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';

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

Modal.PropTypes = {
  children: PropTypes.element,
  toggleActiveModal: PropTypes.func,
};
