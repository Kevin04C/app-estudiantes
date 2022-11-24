import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import Input from './Input';

const SearcherView = ({ handleChange, handleSubmit, search, errorMsg }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className='search-form'>
        <Input
          className='search-input'
          value={search}
          onChange={handleChange}
        />
        <button type='submit' className='search-button'>
          <AiOutlineSearch></AiOutlineSearch>
        </button>
      </form>
      {errorMsg && <small style={{ color: 'red' }}>{errorMsg}</small>}
    </>
  );
};

SearcherView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  search: PropTypes.string,
  errorMsg: PropTypes.string,
};

export default SearcherView;
