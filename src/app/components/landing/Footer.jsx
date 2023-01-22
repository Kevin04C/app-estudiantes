import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { SiGmail } from 'react-icons/SI';

export const Footer = () => {
  return (
    <footer className='bg-primary'>
      <div className='footer-container'>
        <div className='footer'>
          <h3 className='footer__logo'>
            APP <span>STUDENTS</span>
          </h3>
          <ul className='footer__social-networks'>
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <SiGmail />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
