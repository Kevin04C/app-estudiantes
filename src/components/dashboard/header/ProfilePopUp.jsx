import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const ProfilePopUp = ({ refProfile }) => {
  return (
    <div ref={refProfile} className={styles.ProfilePopUp}>
      <div className={styles.ProfileHeader}>
        <img className={styles.ProfileImgPopUp} src="src/rodrigo.jpeg" alt="" />
        <div className={styles.ProfileDataUser}>
          <h2 className={styles.ProfileName}>Rodrigo Carpio</h2>
          <h2 className={styles.ProfileUser}>@rodcarpio</h2>
        </div>
      </div>
      <ul className={styles.ProfileBody}>
        <li className={styles.ProfileItem}>
          <span className={styles.ProfileIcon}></span>
          <Link className={styles.ProfileLink}>Tus perfil</Link>
        </li>
        <li className={styles.ProfileItem}>
          <span className={styles.ProfileIcon}></span>
          <Link className={styles.ProfileLink}>Otras cosas</Link>
        </li>
        <li className={styles.ProfileItem}>
          <span className={styles.ProfileIcon}></span>
          <Link className={styles.ProfileLink}>Algo más</Link>
        </li>
      </ul>
      <ul className={styles.ProfileFooter}>
        <li className={styles.ProfileItem}>
          <span className={styles.ProfileIcon}></span>
          <Link className={styles.ProfileLink}>Cerrar sesión</Link>
        </li>
      </ul>
    </div>
  )
}

export default ProfilePopUp
