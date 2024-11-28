import styled from "styled-components";
import { NavLink } from "react-router";

// Container principal do card
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 500px;
  max-height: 600px;
  padding: 20px;
  z-index: 10;
`;

// Caixa do formulário com bordas arredondadas, sombreamento e padding
export const FormBox = styled.div`
  background-color: white;
  max-width: 500px;
  width: 100%;
  padding: 30px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1); /* Aumentando a sombra para mais destaque */
  border-radius: 15px; /* Bordas mais arredondadas */
  transition: box-shadow 0.3s ease-in-out; /* Suavizando a animação da sombra */

  /* Efeito de hover para dar destaque quando o mouse passa sobre a caixa */
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Typography = styled.h5<{
  variant?: string;
  align?: string;
  gutterBottom?: boolean;
}>`
  font-size: ${({ variant }) => (variant === "h5" ? "26px" : "16px")};
  font-weight: bold;
  text-align: ${({ align }) => (align === "center" ? "center" : "left")};
  margin-bottom: ${({ gutterBottom }) => (gutterBottom ? "20px" : "0")};
  color: #333; /* Cor mais suave para o texto */
`;

export const TextField = styled.input<{ label: string; type: string }>`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #578f47;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const FormControlLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-top: 16px;
  color: #555; /* Texto de label mais suave */
`;

export const Button = styled.button`
  width: 100%;
  background-color: #578f47;
  color: white;
  font-weight: bold;
  height: 53px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a7b3a;
  }
`;

export const LoginLink = styled(NavLink)`
  color: #578f47;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const SubmitContainer = styled.div`
  margin-top: 16px;
`;
