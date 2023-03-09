import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as API from '../services/api';

export default function HomeView() {
  const [characters, setCharacters] = useState(null);
  const location = useLocation();

  useEffect(() => {
    API.FetchCharacters()
      .then(r => r.results)
      .then(setCharacters);
  }, []);

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
    </>
  );
}
