import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import Input from './Input';

const SearcherView = ({ handleChange, handleSubmit, search, error }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className='searcher'>
        <Input
          className='searcher__input'
          value={search}
          onChange={handleChange}
        />
        <button type='submit' className='searcher__button'>
          <AiOutlineSearch></AiOutlineSearch>
        </button>
      </form>
      {error()}
    </>
  );
};

SearcherView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  search: PropTypes.string,
  error: PropTypes.func,
};

export default SearcherView;
