import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import * as API from '../services/api';

import styled from 'styled-components';

import Header from '../components/Header';
import CharactersList from '../components/CharactersList.jsx';
import Searchbar from '../components/SearchBar';
import Footer from '../components/Footer';

export const HomeView = ({ filter }) => {
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
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
    API.FetchFiltered(name)
      .then(r => r.results)
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
    setSearchParams({ name: filter });
  };

  return (
    <Container>
      <Header />
      <main>
        <Searchbar onSubmit={handleSubmit} />
        {characters && <CharactersList characters={characters} />}
      </main>
      <Footer/>
    </Container>
  );
};
const Container = styled.div`
width: 100%;
`