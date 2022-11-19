import React from 'react'
import styles from './Header.module.scss'

const Searcher = () => {
  return (
    <input
      className={styles.Search}
      type="search"
      name="search"
      placeholder="Buscar cursos"
    />
  )
}

export default Searcher
