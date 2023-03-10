import { useState, useEffect } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import * as API from '../services/api';

export default function HomeView() {
  const [characters, setCharacters] = useState([]);
  // const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    API.FetchCharacters()
      .then(r => r.results)
      .then(setCharacters);
  }, []);

  const sortByName = (a, b) => a.name.localeCompare(b.name);

  const changeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(filter);
    navigate({ ...location, search: `query=${filter}` });
    setCharacters([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    API.FetchFiltered(query)
      .then(r => r.results)
      .then(setFiltered)
  }, [query]);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="filter"
          autoComplete="off"
          autoFocus
          placeholder="Filter by name..."
          onChange={changeFilter}
        />
      </form>
      {characters && (
        <ul>
          {characters.sort(sortByName).map(character => (
            <li key={character.id}>
              <Link to={`/${character.id}`} state={{ from: location }}>
                <div>
                  <img src={character.image} alt="" />
                  <p>{character.name}</p>
                  <p>Specie {character.species}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {filtered && (
        <ul>
          {filtered.sort(sortByName).map(character => (
            <li key={character.id}>
              <Link to={`/${character.id}`} state={{ from: location }}>
                <div>
                  <img src={character.image} alt="" />
                  <p>{character.name}</p>
                  <p>Specie {character.species}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
