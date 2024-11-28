import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth/authProvider";
import logo from "../../assets/logo-pague-bem.png";
import {
  ButtonLogin,
  ErrorMessage,
  InputGroup,
  Inputs,
  Container,
  LoginForm,
  LoginLogo,
  LogoContainer,
  Text1,
  Text2,
  TitleLogin,
  LoginContainer,
  Text4,
  ContainerText5,
  Text5,
  Text6,
} from "./loginStyle";
import { Layout } from "../../components/layout/layout";
import { httpClient } from "../../api/httpsClient";

interface LoginResponse {
  access: string;
  refresh: string;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await httpClient.post<LoginResponse>("login/", {
        email,
        password,
      });

      const { access, refresh } = response.data;

      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      login();

      navigate("/home");
    } catch (error) {
      setError("Credenciais inválidas. Tente novamente.");
      console.error("Erro durante o login:", error);
    }
  };

  return (
    <Layout>
      <div className="flex flex-row align-items-center justify-content-center" style={{ height: '90vh' }}>
        <Container className="shadow-2">
          <LogoContainer>
            <LoginLogo src={logo} alt="Logo Pague Bem" />
            <Text1>SEJA BEM-VINDO</Text1>
            <Text2>
              Para se manter conectado conosco, faça login com suas informações
              pessoais.
            </Text2>
          </LogoContainer>
          <LoginContainer>
            <TitleLogin>Efetue seu login</TitleLogin>
            <LoginForm onSubmit={handleLogin}>
              <InputGroup>
                <Inputs
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                />
              </InputGroup>
              <InputGroup>
                <Inputs
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                />
              </InputGroup>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <ButtonLogin type="submit">Entrar</ButtonLogin>
              <Text4>Esqueci minha senha</Text4>
              <ContainerText5>
                <Text5>Não tem uma conta? </Text5>
                <Text6 to={"/cadastro"}>Registre-se aqui</Text6>
              </ContainerText5>
            </LoginForm>
          </LoginContainer>
        </Container>
      </div>
    </Layout>
  );
}

export default Login;
