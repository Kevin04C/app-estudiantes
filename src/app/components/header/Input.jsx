const Input = ({ onChange, value, className }) => {
  return (
    <input
      type='text'
      className={className}
      name='searchInput'
      placeholder='Buscar...'
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
