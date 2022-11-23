import React from 'react';
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

export default SearcherView;
