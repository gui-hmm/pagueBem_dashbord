import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90px;
  padding-top: 80px; 
  
`;

export const HeaderComponent = styled.header`
  background-color: white;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  height: 90px;
  z-index: 1000; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const LogoMarca = styled.img`
  width: 25vh; 
  height: auto; 
  margin-left: 20px; 
`;
