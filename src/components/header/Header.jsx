import { Link } from 'react-router-dom';
// import Searcher from './Searcher';
import Profile from './Profile';
const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <span>App</span> Student
      </Link>
      {/* <Searcher /> */}
      <Profile />
    </header>
  );
};

export default Header;
