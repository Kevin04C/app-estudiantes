import { Link } from 'react-router-dom';
import Profile from './Profile';
import Notification from './Notification';
import Searcher from './Searcher';
const Header = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        <Link to='/home' className='header__logo'>
          <span>App</span> Student
        </Link>
        <Searcher />
      </div>
      <div className='header__right'>
        <Notification />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
