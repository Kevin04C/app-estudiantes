import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearcherView from './SearcherView';

const Searcher = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value.trim());
    setErrorMsg(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      setErrorMsg('*Ingresa una búsqueda');
    } else {
      setSearch('');
      navigate(`/search=${search}`);
    }
  };

  return (
    <>
      <SearcherView
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
        errorMsg={errorMsg}
      />
    </>
  );
};

export default Searcher;
