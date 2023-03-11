
import { useLoaderData, useNavigation, useLocation, useNavigate} from 'react-router-dom';
import * as API from '../services/api';

export default function CharacterDetailsView() {
  const character = useLoaderData();
  let navigate = useNavigate();

  const { state } = useNavigation();
  const location = useLocation();
  console.log(location);

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
        </div>)}      
    </>
  );
}
export const characterByIdLoader = async ({ params }) => {
  console.log({params});
  const id = params.id;
  return API.FetchCharacterDetails(id).then(r=>r);
}