import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import * as API from '../services/api';

import CharactersList from '../components/CharactersList.jsx';

export default function FilteredView({ query }) {
//   const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  // const location = useLocation();
  // const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = searchParams.get('query');

  // fetch by first query
  useEffect(() => {
    if (query === '') {
      return;
    }
    API.FetchFiltered(query)
      .then(r => r.results)
      .then(setFiltered);
  }, [query]);

  // fetch by go back
  useEffect(() => {
    if (search === null) {
      return;
    }
    API
      .FetchFiltered(search)
      .then(r => r.results)
      .then(setFiltered);
  }, [search]);

  
    
  return (
    <>
          {filtered && <CharactersList characters={filtered} />}
    </>
  );
}