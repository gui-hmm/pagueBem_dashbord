import React from 'react';
import { Container, HeaderComponent, LogoMarca } from './headerStyle';
import Logo from '../../assets/logo-pague-bem.png';

const Header: React.FC = () => {
  return (
    <Container>
        <HeaderComponent>
            <LogoMarca src={Logo} alt="Logo da Empresa" />
        </HeaderComponent>
    </Container>
  );
}

export default Header;
