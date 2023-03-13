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
  // let characters = useLoaderData();
  const [characters, setCharacters] = useState([]);
  // const filtered = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  const location = useLocation();
  // console.log(location.search);

  const navigate = useNavigate();
  const search = searchParams.get('query');
  // console.log(search);
useEffect(() => {
    API.FetchCharacters()
      .then(r => r.results)
      .then(setCharacters);
  }, []);

  const handleSubmit = filter => {
    setQuery(filter);
    console.log(filter);
    navigate({ ...location, search: `query=${filter}` });
    setSearchParams({ query: filter })
    setCharacters([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    API
      .FetchFiltered(query)
      .then(r =>r.results)
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
// export const charactersLoader = async ({ request, params }) => {
//   console.log({ request, params });
//   return API.FetchCharacters().then(r => r.results);
// };
// export const filteredLoader = async ({ request, params }) => {
//   console.log({ request, params });
//   // const name = request.url;
  
//   return API.FetchFiltered(search).then(r=>r.results)
// }