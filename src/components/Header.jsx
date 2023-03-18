import logoDesktop from '../images/logo-desktop.png';
import logoMobile from '../images/logo-mobile.png';

import styled from 'styled-components';
import Media from 'react-media';

export default function Header() {
  return (
    <LogoHeader>
      <Media query="(max-width: 480px)">
        {matches =>
          matches ? (
            <LogoMobile src={logoMobile} alt="logo-mobile" />
          ) : (
            <LogoDesktop src={logoDesktop} alt="logo-desktop" />
          )
        }
      </Media>
    </LogoHeader>
  );
}
const LogoHeader = styled.header`
  width: 100%;
  margin-bottom: 32px;
  @media screen and (min-width: 481px){
    margin-bottom: 16px;
  }
`;
const LogoDesktop = styled.img`
  display: block;
  width: 600px;
  margin: 0 auto;
`;
const LogoMobile = styled.img`
  display: block;
  width: 312px;
  margin: 0 auto;
`;
