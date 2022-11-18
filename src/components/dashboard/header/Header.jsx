import React from 'react'
import Profile from './Profile'
import Searcher from './Searcher'
import styles from './Header.module.scss'
const Header = () => {
  return (
    <header className={styles.Container}>
      <h1 className={styles.Logo}>AppStudent</h1>
      <Searcher />

      <Profile />
    </header>
  )
}

export default Header
