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
