import React, { useRef } from 'react'
import styles from './Header.module.scss'
import ProfilePopUp from './ProfilePopUp'
const Profile = () => {
  const handleClick = () => {
    if (refProfile.current.classList.length == 1) {
      refProfile.current.classList.add(`${styles.PopUpOn}`)
    } else {
      refProfile.current.classList.remove(`${styles.PopUpOn}`)
    }
    console.log(refProfile)
  }
  const refProfile = useRef()

  return (
    <>
      <div className={styles.ProfileContainer}>
        <img
          className={styles.ProfileImg}
          src="src/rodrigo.jpeg"
          alt="rodrigo"
          onClick={handleClick}
        />
        <ProfilePopUp refProfile={refProfile} />
      </div>
    </>
  )
}

export default Profile
