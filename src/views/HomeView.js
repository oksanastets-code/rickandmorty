import { useState, useEffect } from 'react';
import * as API from '../services/api';

export default function HomeView() {
  const [characters, setCharacters] = useState(null);

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
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
