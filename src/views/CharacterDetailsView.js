import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import * as API from '../services/api';

export default function CharacterDetailsView() {
  const location = useLocation();
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    API.FetchCharacterDetails(id).then(setCharacter);
  }, [id]);
  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      {character && (
        <div>
          <img src={character.image} alt="" />
          <p>{character.name}</p>
          <p>Specie {character.species}</p>
          <p>Gender {character.gender}</p>
          <p>Status {character.status}</p>
          <p>Origin {character.origin.name}</p>
          <p>Type {character.type}</p>
        </div>
      )}
    </>
  );
}
