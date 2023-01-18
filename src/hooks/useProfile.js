import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startUploadPhoto } from '../store/auth/thunks';

export const useProfile = () => {
  const { uploadingPhoto } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  const [showPrev, setShowPrev] = useState(false);
  const fileRef = useRef();
  const imageRef = useRef();
  const isPhotoSent = useRef(false);

  const ternariUploading = uploadingPhoto ? 'Subiendo...' : 'Cambiar foto';

  const handleChangeImage = () => {
    fileRef.current.click();
  };

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    if (!file) {
      setFile(null);
    } else {
      setFile(file);
      setShowPrev(true);
    }
  };

  const handleConfirm = () => {
    dispatch(startUploadPhoto(file));
    setShowPrev(false);
    isPhotoSent.current = true;
    setFile(null);
  };

  const handleCancel = () => {
    setFile(null);
    fileRef.current.value = '';
    setShowPrev(false);
  };
  return {
    //atributtes
    file,
    showPrev,
    fileRef,
    imageRef,
    isPhotoSent,
    ternariUploading,
    uploadingPhoto,

    //methods
    setFile,
    setShowPrev,
    handleChangeImage,
    handleFileChange,
    handleConfirm,
    handleCancel,
  };
};
