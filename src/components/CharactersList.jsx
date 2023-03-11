import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CharactersList({ characters }) {
  const location = useLocation();
  // console.log(location);
    const sortByName = (a, b) => a.name.localeCompare(b.name);
  return (
    <ul>
          {characters.sort(sortByName).map(character => (
            <li key={character.id}>
              <Link to={`/${character.id}`}
                state={{ from: location }}
              
              >
                <div>
                  <img src={character.image} alt="" />
                  <p>{character.name}</p>
                  <p>Specie {character.species}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
  );
}