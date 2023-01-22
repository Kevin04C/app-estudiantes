import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearcherView from './SearcherView';
import toast from 'react-hot-toast';

const Searcher = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      toast.error('Ingresa una búsqueda');
    } else {
      navigate(`/app/search?q=${search}`);
    }
    setSearch('');
  };

  return (
    <>
      <SearcherView handleChange={handleChange} handleSubmit={handleSubmit} search={search} />
    </>
  );
};

export default Searcher;
