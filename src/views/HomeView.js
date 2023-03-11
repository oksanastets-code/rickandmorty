import { useState, useEffect } from 'react';
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import * as API from '../services/api';

import CharactersList from '../components/CharactersList.jsx';
import Searchbar from '../components/SearchBar';

export const HomeView = () => {
  const characters = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const search = searchParams.get('query');
  console.log(search);

  const handleSubmit = filter => {
    setQuery(filter);
    navigate({ ...location, search: `query=${filter}` });
    // setCharacters([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    API.FetchFiltered(query)
      .then(r => r.results)
      .then(setFiltered);
  }, [query]);

  useEffect(() => {
    if (search === null) {
      return;
    }

    API.FetchFiltered(search)
      .then(r => r.results)
      .then(setFiltered);
  }, [search]);

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {characters && <CharactersList characters={characters} />}
      {filtered && <CharactersList characters={filtered} />}
    </>
  );
};
export const charactersLoader = async ({ request, params }) => {
  console.log({ request, params });
  return API.FetchCharacters().then(r => r.results);
};
