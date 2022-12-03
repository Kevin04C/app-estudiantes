import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearcherView from './SearcherView';
import toast, { Toaster } from 'react-hot-toast';

const Searcher = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      toast.error('Ingresa una búsqueda');
    } else {
      setSearch('');
      navigate(`/search?q=${search}`);
    }
  };

  return (
    <>
      <SearcherView
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
        error={() => <Toaster />}
      />
    </>
  );
};

export default Searcher;
