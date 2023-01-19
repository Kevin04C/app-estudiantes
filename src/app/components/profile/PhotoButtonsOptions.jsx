import React from 'react';
import { ControlButtons } from './ControlsButtons';

export const PhotoButtonsOptions = ({
  ternariUploading,
  showPrev,
  handleChangeImage,
  handleConfirm,
  handleCancel,
  uploadingPhoto,
}) => {
  return (
    <div className='photo-options__buttons'>
      {showPrev ? (
        <ControlButtons handleConfirm={handleConfirm} handleCancel={handleCancel} />
      ) : (
        <button
          className='button-profile
         photo-options__btn-change'
          onClick={handleChangeImage}
          disabled={uploadingPhoto}
        >
          {ternariUploading}
        </button>
      )}
    </div>
  );
};
