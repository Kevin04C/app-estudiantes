import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import ProfilePopUp from './ProfilePopUp'
const Profile = () => {
  const refProfile = useRef()
  const refProfileImg = useRef()

  const handleClick = () => {
    if (refProfile.current.classList.length == 1) {
      refProfile.current.classList.add(`${styles.PopUpOn}`)
      refProfileImg.current.classList.add(`${styles.ProfileActive}`)
    } else {
      refProfile.current.classList.remove(`${styles.PopUpOn}`)
      refProfileImg.current.classList.remove(`${styles.ProfileActive}`)
    }
    console.log(refProfile)
  }

  return (
    <div className={styles.ProfileContainer}>
      <img
        ref={refProfileImg}
        className={styles.ProfileImg}
        src="src/rodrigo.jpeg"
        alt="rodrigo"
        onClick={handleClick}
      />
      <NavLink />
      <ProfilePopUp refProfile={refProfile} />
    </div>
  )
}

export default Profile
