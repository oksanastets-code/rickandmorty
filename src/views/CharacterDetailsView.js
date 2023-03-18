import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import * as API from '../services/api';
import styled from 'styled-components';

import { Button } from '../components/Button';

export default function CharacterDetailsView({ onClick }) {
  const character = useLoaderData();
  let navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <Container>
      <Button onClick={onGoBack} />

      {character && (
        <CardWrapper>
          <CharacterImg src={character.image} alt="" />
          <Name>{character.name}</Name>
          <Title>Information</Title>
          <DataWrapper>
            <ItemWrapper>
              <DataTitle>Specie</DataTitle>
              <Data>{character.species}</Data>
            </ItemWrapper>
            <ItemWrapper>
              <DataTitle>Gender</DataTitle>
              <Data>{character.gender}</Data>
            </ItemWrapper>
            <ItemWrapper>
              <DataTitle>Status</DataTitle>
              <Data>{character.status}</Data>
            </ItemWrapper>
            <ItemWrapper>
              <DataTitle>Origin</DataTitle>
              <Data>{character.origin.name}</Data>
            </ItemWrapper>
            <ItemWrapper>
              <DataTitle>Type</DataTitle>
              <Data>{character.type ? character.type : 'unknown'}</Data>
            </ItemWrapper>
          </DataWrapper>
        </CardWrapper>
      )}
    </Container>
  );
}
export const characterByIdLoader = async ({ params }) => {
  const id = params.id;
  return API.FetchCharacterDetails(id).then(r => r);
};

const Container = styled.div`
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 481px) {
    padding: 20px 50px 142px;
  }
`;
const CardWrapper = styled.div`
  width: 312px;
  margin: 77px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 481px) {
    width: 1020px;
    margin: 32px auto 0;
  }
`;
const CharacterImg = styled.img`
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px solid #f2f2f7;
  @media screen and (min-width: 481px) {
    width: 310px;
    height: 310px;
  }
`;
const Name = styled.p`
  margin-top: 34px;
  color: #081f32;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  @media screen and (min-width: 481px) {
    margin-top: 16px;
    font-size: 48px;
    line-height: 56px;
  }
`;
const Title = styled.p`
  margin-top: 35px;
  align-self: start;
  color: #8e8e93;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  @media screen and (min-width: 481px) {
    margin-top: 48px;
    align-self: center;
  }
`;
const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  margin-top: 16px;
  @media screen and (min-width: 481px) {
   width: 412px;
   margin-top: 48px;
  }
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ededed;
  width: 100%;
  padding: 8px 16px 12px 16px;
`;
const DataTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #081f32;
`;
const Data = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  color: #6e798c;
`;
