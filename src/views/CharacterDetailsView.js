import {
  useLoaderData,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import * as API from '../services/api';

export default function CharacterDetailsView() {
  const character = useLoaderData();
  let navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    console.log(location);
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
export const characterByIdLoader = async ({ params }) => {
  const id = params.id;
  return API.FetchCharacterDetails(id).then(r => r);
};