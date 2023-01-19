const Input = ({ onChange, value, className, autoComplete = 'on' }) => {
  return (
    <input
      type='text'
      className={className}
      name='searchInput'
      placeholder='Buscar...'
      onChange={onChange}
      value={value}
      autoComplete={autoComplete}
    />
  );
};

export default Input;
