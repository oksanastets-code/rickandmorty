import logo from '../images/logo-desktop.png'

import styled from 'styled-components';
export default function Header() {
    return (
        <header><Logo src={logo} alt="logo-desktop" /></header>
    )
}
const Logo = styled.img`
display: block;
    width: 600px;
    margin: 80px auto 16px;
`