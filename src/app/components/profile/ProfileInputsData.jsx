export const ProfileInputsData = ({ name, username }) => {
  return (
    <div className='data'>
      <div className='data__group'>
        <label htmlFor='name' className='data__label'>
          Nombre
        </label>
        <input type='text' id='name' value={name} className='data__input' readOnly />
      </div>
      <div className='data__group'>
        <label htmlFor='username' className='data__label'>
          Username
        </label>
        <input type='text' id='username' value={`@${username}`} className='data__input' readOnly />
      </div>
    </div>
  );
};
