import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import * as API from '../services/api';
import styled from 'styled-components';

import { Button } from '../components/Button';

export default function CharacterDetailsView({ onClick }) {
  const character = useLoaderData();
  let navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    console.log(location);
    navigate(location?.state?.from ?? '/');
  };
  return (
    <>
      <Button onClick={onGoBack} />

      {character && (
        <CardWrapper>
          <CharacterImg src={character.image} alt="" />
          <Name>{character.name}</Name>
          <Title>Infomations</Title>
          <DataWrapper>
            <ItemWrapper>
              <DataTitle>
                Specie
              </DataTitle><Data>{character.species}</Data>
            </ItemWrapper>
            <ItemWrapper>
              <DataTitle>
                Gender
              </DataTitle><Data>{character.gender}</Data>
            </ItemWrapper>
            <ItemWrapper>
              <DataTitle>
                Status 
              </DataTitle><Data>{character.status}</Data>
            </ItemWrapper>
            <ItemWrapper>
              <DataTitle>
                Origin 
              </DataTitle><Data>{character.origin.name}</Data>
            </ItemWrapper>
            <ItemWrapper>
              <DataTitle>
                Type 
              </DataTitle>
            </ItemWrapper><Data>{character.type}</Data>
          </DataWrapper>
        </CardWrapper>
      )}
    </>
  );
}
export const characterByIdLoader = async ({ params }) => {
  const id = params.id;
  return API.FetchCharacterDetails(id).then(r => r);
};

const CardWrapper = styled.div`
  width: 1020px;
  margin: 32px auto 142px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CharacterImg = styled.img`
  display: block;
  width: 310px;
  height: 310px;
  border-radius: 50%;
  border: 5px solid #f2f2f7;
`;
const Name = styled.p`
  margin-top: 16px;
  color: #081f32;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
`;
const Title = styled.p`
  margin-top: 48px;
  color: #8e8e93;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 412px;
  margin-top: 48px;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ededed;
  width: 100%;
  padding: 8px auto 12px 16px;
`;
const DataTitle = styled.p`
font-weight: 700;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.15px;
color:  #081f32;
`;
const Data = styled.p`
font-size: 14px;
line-height: 20px;
letter-spacing: 0.25px;
color: #6E798C;
`;
