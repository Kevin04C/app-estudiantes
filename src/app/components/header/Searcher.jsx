import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const Searcher = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSearch('');
      navigate(`/search=${search}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='search-form'>
      <Input className='search-input' value={search} onChange={handleChange} />
      <button type='submit' className='search-button'>
        <AiOutlineSearch></AiOutlineSearch>
      </button>
    </form>
  );
};

export default Searcher;
