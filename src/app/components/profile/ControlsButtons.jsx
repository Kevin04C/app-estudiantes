export const ControlButtons = ({ handleConfirm, handleCancel }) => {
  return (
    <>
      <button
        className='button-profile photo-options__confirm'
        onClick={handleConfirm}
      >
        Confirmar
      </button>
      <button
        className='button-profile photo-options__cancel'
        onClick={handleCancel}
      >
        Cancelar
      </button>
    </>
  );
};
