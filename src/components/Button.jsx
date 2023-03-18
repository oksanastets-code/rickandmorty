import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const Button = ({ onClick }) => {
  return (
    <GoBackBtn type="button" onClick={onClick}>
      <ArrowLeftOutlined style={{ fontSize: '18px' }} />
      <BtnText>Go back</BtnText>
    </GoBackBtn>
  );
};
const GoBackBtn = styled.button`
  background-color: #ffffff;
`;
const BtnText = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-left: 8px;
`;
