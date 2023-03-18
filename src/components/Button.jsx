import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';

export const Button = ({ onClick }) => {
  return (
    <GoBackBtn type="button" onClick={onClick}>
      <ArrowLeftOutlined style={{ fontSize: '18px', color: '#000000' }} />
      <BtnText>Go back</BtnText>
    </GoBackBtn>
  );
};
const GoBackBtn = styled.button`
  background-color: #ffffff;
  transition: transform var(--animation-duration) var(--timing-function);

  &:hover{
    transform: scale(1.03);
    cursor: pointer;
  }
`;
const BtnText = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-left: 8px;
`;
