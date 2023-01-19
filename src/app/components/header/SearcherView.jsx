import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import Input from './Input';

const SearcherView = ({ handleChange, handleSubmit, search }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className='searcher'>
        <Input
          className='searcher__input'
          value={search}
          onChange={handleChange}
          autoComplete='off'
        />
        <button type='submit' className='searcher__button'>
          <AiOutlineSearch></AiOutlineSearch>
        </button>
      </form>
    </>
  );
};

SearcherView.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  search: PropTypes.string,
};

export default SearcherView;
