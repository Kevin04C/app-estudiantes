const Input = ({ onChange, value }) => {
  return (
    <input
      type='text'
      className='input'
      name='searchInput'
      placeholder='Buscar...'
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
