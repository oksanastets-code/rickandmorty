import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function CharactersList({ characters }) {
  const location = useLocation();
  const sortByName = (a, b) => a.name.localeCompare(b.name);
  return (
    <List>
      {characters.sort(sortByName).map(character => (
        <Item key={character.id}>
          <Link to={`/${character.id}`} state={{ from: location }}>
            <div>
              <ImgWrapper p={character.image}
              >
                {/* <img src={character.image} alt={character.name} /> */}
              </ImgWrapper>
              <TextWrapper>
                <p>{character.name}</p>
              <p>Specie {character.species}</p>
              </TextWrapper>              
            </div>
          </Link>
        </Item>
      ))}
    </List>
  );
}
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1020px;
  margin: 0 auto;
  margin-bottom: -24px;
  
`
const Item = styled.li`
  width: 240px;
  margin-right: 20px;
  margin-bottom: 24px;
  &:nth-child(4n){
    margin-right: 0;
  }
`
const ImgWrapper = styled.div`
  height: 168px;
  background-image: url('https://rickandmortyapi.com/api/character/avatar/1.jpeg');
  background-size: cover;
  background-position-y: -30px;
`
const TextWrapper = styled.div`
  padding: 12px 16px;
`