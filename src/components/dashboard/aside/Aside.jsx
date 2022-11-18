import React from 'react'
import styles from './Aside.module.scss'
const Aside = () => {
  return (
    <aside className={styles.Container}>
      <div className={styles.Burger}>
        <button>_</button>
      </div>
      <div className={styles.Tools}>
        <button className={styles.Button}>-</button>
        <button className={styles.Button}>-</button>
      </div>
    </aside>
  )
}

export default Aside
