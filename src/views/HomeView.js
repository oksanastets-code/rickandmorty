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

export const HomeView = ({filter}) => {
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // let characters = useLoaderData();
  const search = searchParams.get('name');

  useEffect(() => {
    API.FetchCharacters()
      .then(r => r.results)
      .then(setCharacters);
  }, []);

  useEffect(() => {
    if (name === '') {
      return;
    }
    API
      .FetchFiltered(name)
      .then(r =>r.results)
      .then(setCharacters);
  }, [name]);

  useEffect(() => {
    if (search === null) {
      return;
    }
    API.FetchFiltered(search)
      .then(r => r.results)
      .then(setCharacters);
  }, [search]);

  const handleSubmit = filter => {
    setName(filter);
    navigate({ ...location, search: `name=${filter}` });
    setSearchParams({ name: filter })
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {characters && <CharactersList characters={characters} />}
    </>
  );
};
export const charactersLoader = async ({ request, params }) => {
  console.log({ request, params });
  return API.FetchCharacters().then(r => r.results);
};
