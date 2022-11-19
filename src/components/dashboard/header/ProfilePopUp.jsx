import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
// icons
// https://react-icons.github.io/react-icons/icons?name=im
import { ImExit, ImProfile, ImCogs, ImContrast } from 'react-icons/im'

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
      <div className={styles.ProfileBody}>
        <Link className={styles.ProfileItem}>
          <ImProfile />
          Tu Perfil
        </Link>
        <Link className={styles.ProfileItem}>
          <ImCogs />
          Otras cosas
        </Link>
        <Link className={styles.ProfileItem}>
          <ImContrast />
          Algo más
        </Link>
      </div>
      <div className={styles.ProfileFooter}>
        <Link className={styles.ProfileItem}>
          <ImExit />
          Cerrar sesión
        </Link>
      </div>
    </div>
  )
}

export default ProfilePopUp
