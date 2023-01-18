import { useRef } from 'react';
import { BsXLg } from 'react-icons/bs';

export default function Modals({
  children,
  title = 'App Student Modal',
  root,
}) {
  const stopPropagation = (e) => e.stopPropagation();
  const ref = useRef();
  function handleClick() {
    ref.current.classList.add('fadeOut');
    ref.current.addEventListener('animationend', callback, {
      once: true, //One true, para que el event listener solo exista una vez
    });
  }
  function callback() {
    root.unmount();
    document.querySelector('#modal').remove();
  }
  return (
    <div className='modals__container' onClick={handleClick}>
      <div ref={ref} className='modals__content' onClick={stopPropagation}>
        <div className='modals__header'>
          <div className='modals__title'>{title}</div>
          <button className='modals__close' onClick={handleClick}>
            <BsXLg />
          </button>
        </div>
        <div className='modals__body'>{children}</div>
      </div>
    </div>
  );
}
