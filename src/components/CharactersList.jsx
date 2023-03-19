import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';

import { sortByName } from '../utils/sort';
import { cutName } from '../utils/cut';

export default function CharactersList({ characters }) {
  const location = useLocation();
  return (
    <List>
      {characters.sort(sortByName).map(character => (
        <Item key={character.id}>
          <Link to={`/${character.id}`} state={{ from: location }}>
            <CardWrapper>
              <ImgWrapper
                style={{ backgroundImage: `url(${character.image})` }}
              ></ImgWrapper>
              <TextWrapper>
                <Media query="(max-width: 480px)">
                  {matches =>
                    matches ? (
                      <Name>{character.name}</Name>
                    ) : (
                      <Name>{cutName(character.name)}</Name>
                    )
                  }
                </Media>
                <Specie>{character.species}</Specie>
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
  width: 100%;
  margin: 0 auto;
  justify-content: center;

  @media screen and (min-width: 481px) {
    width: 1020px;
    margin-bottom: -24px;
  }
`;
const Item = styled.li`
  width: 312px;
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 481px) {
    width: 240px;
    margin-right: 20px;
    margin-bottom: 24px;
    &:nth-child(4n) {
      margin-right: 0;
    }
  }
`;
const CardWrapper = styled.div`
  border-radius: 3px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 3px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  transition: transform var(--animation-duration) var(--timing-function);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 232px;
  background-size: cover;
  background-position-y: -30px;

  @media screen and (min-width: 481px) {
    height: 168px;
  }
`;
const TextWrapper = styled.div`
  padding: 12px 16px;
`;
const Name = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.15px;
`;
const Specie = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
`;
