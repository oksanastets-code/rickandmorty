import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>Reenbit's Test task by Oksana Stets</FooterText>
    </FooterContainer>
  );
}
const FooterContainer = styled.footer`
  width: 1020px;
  margin: 80px auto 20px;
`;

const FooterText = styled.p`
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.25px;
`;
