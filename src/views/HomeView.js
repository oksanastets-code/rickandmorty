import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from '../services/api';

export default function HomeView() {
  const [characters, setCharacters] = useState([]);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(true);
  const location = useLocation();

  useEffect(() => {
    API.FetchCharacters()
      .then(r => r.results)
      .then(setCharacters
        // (characters.sort((a, b) => a.name - b.name))
      );
  }, []);
  // const sortByName = (a, b) => a.name - b.name;
  const sorted = [...characters].sort((a,b)=> a.name.localeCompare(b.name));
  console.log('sorted :', sorted);

  const onLoadMoreClick = () => {
    // useEffect(() => { },
    // [])
  };
  return (
    <>
      {characters && (
        <ul>
          {characters.map(character => (
            <li key={character.id}>
              <Link to={`/${character.id}`} state={{ from: location }}>
                <div>
                  <img src={character.image} alt="" />
                  <p>{character.name}</p>
                  <p>Specie {character.species}</p>
                  <p>Gender {character.gender}</p>
                  <p>Status {character.status}</p>
                  <p>Origin {character.origin.name}</p>
                  <p>Type {character.type}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {showLoadMoreBtn && (
        <button type="button" onClick={onLoadMoreClick}>
          Load more
        </button>
      )}
    </>
  );
}
