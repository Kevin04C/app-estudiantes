import React, { useRef } from 'react'
import styles from './Aside.module.scss'
import { ImMenu, ImPacman, ImFont } from 'react-icons/im'
import { Link, NavLink } from 'react-router-dom'
const Aside = () => {
  const refAside = useRef()
  const refButton = useRef()
  const refButtonTooltip = useRef()
  const handleClick = () => {
    // if (refAside.current.classList.length <= 1) {
    refAside.current.classList.toggle(`${styles.AsideLarge}`)
    refButton.current.classList.toggle(`${styles.Test}`)
    refButtonTooltip.current.classList.toggle(`${styles.TestTooltip}`)
    // }
  }
  return (
    <aside ref={refAside} className={styles.Container}>
      <div onClick={handleClick} className={styles.Burger}>
        <ImMenu />
      </div>
      <div className={styles.Tools}>
        <NavLink ref={refButton} className={styles.Button}>
          <ImPacman />
          <span ref={refButtonTooltip} className={styles.ButtonTooltip}>
            Mucho Texto :v
          </span>
        </NavLink>
      </div>
    </aside>
  )
}

export default Aside
