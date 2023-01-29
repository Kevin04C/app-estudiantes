import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useProfile } from '../../hooks/useProfile';
import { PhotoButtonsOptions } from '../components/profile/PhotoButtonsOptions';
import { ProfileInputsData } from '../components/profile/ProfileInputsData';
import { UserPhoto } from '../components/profile/UserPhoto';

export const ProfilePage = () => {
  const { name, username, image } = useSelector((state) => state.auth.user);
  const {
    //atributtes
    file,
    showPrev,
    fileRef,
    imageRef,
    ternariUploading,
    uploadingPhoto,

    //methods
    handleChangeImage,
    handleFileChange,
    handleConfirm,
    handleCancel,
  } = useProfile();

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        imageRef.current.src = reader.result;
      };
      return;
    }
    imageRef.current.src = image;
  }, [file]);

  return (
    <section>
      <div className='settings-wrapper'>
        <div className='photo-options'>
          <UserPhoto showPrev={showPrev} imagen={image} name={name} imagenRef={imageRef} />
          <PhotoButtonsOptions
            ternariUploading={ternariUploading}
            showPrev={showPrev}
            handleChangeImage={handleChangeImage}
            handleConfirm={handleConfirm}
            handleCancel={handleCancel}
            uploadingPhoto={uploadingPhoto}
          />
          <input
            type='file'
            name='image'
            ref={fileRef}
            hidden
            accept='image/png, image/gif, image/jpeg'
            onChange={handleFileChange}
          />
        </div>
        <ProfileInputsData name={name} username={username} />
      </div>
    </section>
  );
};
