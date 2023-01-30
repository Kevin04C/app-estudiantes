export const UserPhoto = ({ showPrev, imagen, name, imagenRef }) => {
  return (
    <div className='photo-options__wrapper'>
      <picture className='photo-options__picture'>
        <img src={imagen} alt={name} className='photo-options__img' ref={imagenRef} />
      </picture>

      {showPrev && <span className='photo-options__prev'>*Previsualización*</span>}
    </div>
  );
};
