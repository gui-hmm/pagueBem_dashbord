import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  SubmitContainer,
  CardContainer,
  FormBox,
  LoginLink,
} from "./cadastroStyle";
import { Layout } from "../../components/layout/layout";
import { httpClient } from "../../api/httpsClient";
import { FormControlLabel, Checkbox } from "@mui/material";

const Cadastro: React.FC = () => {
  const [tipo, setTipo] = useState("PESSOA_FISICA");
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    termos: false,
    cpfCnpj: "",
    razaoSocial: "",
    nomeFantasia: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.termos) {
      setError("Você deve aceitar os termos de uso.");
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setError("As senhas não conferem.");
      return;
    }

    try {
      const payload =
        tipo === "PESSOA_FISICA"
          ? {
              tipo: "PF", // Tipo para Pessoa Física
              cpf: formData.cpfCnpj,
              nome: formData.nomeCompleto, // Campo nome para PF
              email: formData.email,
              password: formData.senha, // Alterado para "password"
            }
          : {
              tipo: "PJ", // Tipo para Pessoa Jurídica
              cnpj: formData.cpfCnpj,
              razao_social: formData.razaoSocial, // Campo razão social para PJ
              nome_fantasia: formData.nomeFantasia, // Campo nome fantasia para PJ
              email: formData.email,
              password: formData.senha, // Alterado para "password"
            };

      const endpoint =
        tipo === "PESSOA_FISICA" ? "credores/pf/" : "credores/pj/";

      await httpClient.post(endpoint, payload);
      alert("Cadastro realizado com sucesso!");
      window.location.href = "/";
    } catch (error: any) {
      setError(error.response?.data?.detail || "Erro ao realizar o cadastro.");
    }
  };

  return (
    <Layout>
      <div className="flex flex-row align-items-center justify-content-center w-screen h-screen">
        <CardContainer>
          <FormBox>
            <Typography variant="h5" align="center" gutterBottom>
              Crie sua conta
            </Typography>
            {error && (
              <Typography variant="body2" color="error" align="center">
                {error}
              </Typography>
            )}
            <form onSubmit={handleSubmit}>
              <Typography variant="body2" align="left" gutterBottom>
                Tipo de cadastro:
              </Typography>
              <select
                name="tipo"
                value={tipo}
                onChange={(e) => {
                  setTipo(e.target.value);
                  setFormData((prev) => ({
                    ...prev,
                    cpfCnpj: "",
                    nomeCompleto: "",
                    razaoSocial: "",
                    nomeFantasia: "",
                  })); // Limpa os campos ao trocar o tipo
                }}
                style={{ width: "100%", marginBottom: "10px" }}
              >
                <option value="PESSOA_FISICA">Pessoa Física</option>
                <option value="PESSOA_JURIDICA">Pessoa Jurídica</option>
              </select>

              {tipo === "PESSOA_FISICA" ? (
                <>
                  <TextField
                    label="CPF"
                    type="text"
                    name="cpfCnpj"
                    value={formData.cpfCnpj}
                    onChange={handleChange}
                    placeholder="CPF"
                    required
                  />
                  <TextField
                    label="Nome completo"
                    type="text"
                    name="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                    placeholder="Nome Completo"
                    required
                  />
                </>
              ) : (
                <>
                  <TextField
                    label="CNPJ"
                    type="text"
                    name="cpfCnpj"
                    value={formData.cpfCnpj}
                    onChange={handleChange}
                    placeholder="CNPJ"
                    required
                  />
                  <TextField
                    label="Razão Social"
                    type="text"
                    name="razaoSocial"
                    value={formData.razaoSocial}
                    onChange={handleChange}
                    placeholder="Razão Social"
                    required
                  />
                  <TextField
                    label="Nome Fantasia"
                    type="text"
                    name="nomeFantasia"
                    value={formData.nomeFantasia}
                    onChange={handleChange}
                    placeholder="Nome Fantasia"
                    required
                  />
                </>
              )}

              <TextField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <TextField
                label="Senha"
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Senha"
                required
              />
              <TextField
                label="Confirmar senha"
                type="password"
                name="confirmarSenha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                placeholder="Confirmar senha"
                required
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="termos"
                    checked={formData.termos}
                    onChange={handleChange}
                    required
                  />
                }
                label="Aceito os termos de uso e política de privacidade"
              />

              <SubmitContainer>
                <Button type="submit">Registrar</Button>
              </SubmitContainer>

              <Typography variant="body2" align="center">
                Já tem uma conta? <LoginLink to="/">Faça login</LoginLink>
              </Typography>
            </form>
          </FormBox>
        </CardContainer>
      </div>
    </Layout>
  );
};

export default Cadastro;
