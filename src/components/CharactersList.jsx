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
            <CardWrapper>
              <ImgWrapper style={{backgroundImage: `url(${character.image})`}}
              >
              </ImgWrapper>
              <TextWrapper>
                <Name>{character.name}</Name>
              <Specie>Specie {character.species}</Specie>
              </TextWrapper>              
            </CardWrapper>
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
const CardWrapper = styled.div`
  border-radius: 3px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.12),
      0px 2px 4px rgba(0, 0, 0, 0.14);
`
const ImgWrapper = styled.div`
  height: 168px;
  background-size: cover;
  background-position-y: -30px;
`
const TextWrapper = styled.div`
  padding: 12px 16px;
`
const Name = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
font-size: 20px;
line-height: 30px;
letter-spacing: 0.15px;
`
const Specie = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
font-size: 14px;
line-height: 21px;
letter-spacing: 0.25px;
`