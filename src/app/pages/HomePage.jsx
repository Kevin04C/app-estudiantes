import React from 'react'
import Aside from '../../components/dashboard/aside/Aside'
import Header from '../../components/dashboard/header/Header'
import Main from '../../components/dashboard/main/Main'
import styles from './HomePage.module.scss'
const HomePage = () => {
  return (
    <main className={styles.Container}>
      <Header />
      <Aside />
      <Main />
    </main>
  )
}

export default HomePage
