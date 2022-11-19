import Profile from './Profile'
import Searcher from './Searcher'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className={styles.Container}>
      <Link to="/" className={styles.Logo}>
        AppStudent
      </Link>
      <Searcher />
      <Profile />
    </header>
  )
}

export default Header
