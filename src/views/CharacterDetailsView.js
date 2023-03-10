import { useState, useEffect } from 'react';
import { useParams, useLoaderData, useNavigation, useLocation, useNavigate} from 'react-router-dom';
import * as API from '../services/api';

export default function CharacterDetailsView() {
  const { id } = useParams();
  // const { image, name, species, gender, status, type } = useLoaderData();
  const { state } = useNavigation();
  const location = useLocation();
  const [character, setCharacter] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    API.FetchCharacterDetails(id).then(setCharacter);
  }, [id]);

  const onGoBack = () => {
    // navigate(location?.state?.from ?? '/');
    navigate(-1);
  };
  return (
    <>
      <button type="button" onClick={onGoBack} location={location}>
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
       
          {/* <img src={image} alt="" />
          <p>{name}</p>
          <p>Specie {species}</p>
          <p>Gender {gender}</p>
          <p>Status {status}</p> */}
          {/* <p>Origin {origin.name}</p> */}
          {/* <p>Type {type}</p> */}
        </div>
      )}
    </>
  );
}
