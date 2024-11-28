# 🌟 Pague Bem Brasil Frontend  

![Pague Bem Logo](https://www.paguebembrasil.com.br/assets/assets/img/logo-pague-bem.png) <!-- Substitua pela URL do logo -->

## 🖥️ *Visão Geral*  
O *Pague Bem Brasil Frontend* é uma solução digital para gestão de cobranças e organização de dívidas. Com uma interface moderna e interativa, a aplicação exibe indicadores analíticos, como índices de interação, regularidade, pagamento e reputação, ajudando credores e devedores a tomar decisões financeiras de forma eficiente e personalizada.

---

## 🚀 *Principais Funcionalidades*  
✨ *Gráficos Interativos*: Visualize índices como interação, regularidade, pagamento e reputação de forma clara e intuitiva.  
🎨 *Interface Personalizada*: Componentes organizados para facilitar a navegação e a análise de dados.  
🔗 *Integração com API*: Comunicação em tempo real com o backend para exibição de dados atualizados.  

---

## 🛠️ *Tecnologias Utilizadas*  
Este projeto utiliza um conjunto moderno de tecnologias para oferecer uma experiência fluida e escalável:  

### *Frontend*  
- *React*: Biblioteca principal para construção da interface.  
- *React Router Dom*: Gerenciamento de rotas dinâmicas.  
- *Material-UI (MUI)*: Componentes estilizados e acessíveis.  
- *PrimeReact*: Elementos avançados para design interativo.  
- *Recharts*: Criação de gráficos animados e responsivos.  
- *Styled Components*: Estilização baseada em componentes.  

### *Backend e Integração*  
- *Axios*: Cliente HTTP para integração com APIs RESTful.  

### *Ferramentas Adicionais*  
- *TypeScript*: Adição de tipagem estática para maior confiabilidade no desenvolvimento.  
- *Jest e Testing Library*: Testes unitários e de integração.  

---

## 📋 *Pré-requisitos*  
Certifique-se de que seu ambiente possui as seguintes ferramentas instaladas:  
- *Node.js*: Versão 16 ou superior.  
- *npm*: Gerenciador de pacotes (incluído no Node.js).  
- *Editor de Código*: Como Visual Studio Code (VS Code).  

---

## ⚙️ *Configuração do Projeto*  

### 1️⃣ *Clonar o Repositório*  
No terminal, execute:  
bash
git clone https://github.com/breno-fernandes1/pagueBem-13-Front.git


### 2️⃣ *Instalar Dependências*  
Na raiz do projeto, execute:  
bash
npm install


### 3️⃣ *Configurar Variáveis de Ambiente*  
O cliente HTTP já está configurado para a base da API:  
javascript
const httpClient = axios.create({
  baseURL: 'https://paguebem-api.chacha.vps-kinghost.net/api',
});


### 4️⃣ *Executar o Projeto*  
Para iniciar o ambiente de desenvolvimento, use:  
bash
npm start


🚀 Após rodar este comando, o projeto será iniciado e estará disponível no seu navegador no endereço:
http://localhost:3000

Se o navegador não abrir automaticamente, copie e cole o link no seu navegador.



### 5️⃣ *Compilar para Produção*  
Para gerar uma versão otimizada do projeto:  
bash
npm run build


---

## 📂 *Estrutura do Projeto*  


pague-bem-frontend/
├── public/            # Arquivos estáticos (favicon, index.html)
├── src/               # Código-fonte do projeto
│   ├── components/    # Componentes reutilizáveis
│   │   ├── cliente/   # Funções relacionadas a clientes
│   │   ├── filtro/    # Componentes para filtragem
│   │   ├── graficos/  # Componentes de gráficos
│   │   ├── header/    # Cabeçalho do site
│   │   ├── layout/    # Estrutura geral do layout
│   ├── services/      # Configuração de integração com APIs
│   │   └── api.ts     # Configuração do Axios
│   ├── App.tsx        # Componente principal do aplicativo
├── package.json       # Dependências e scripts do projeto
├── .gitignore         # Arquivos ignorados pelo Git
├── README.md          # Este arquivo


---

## 🌐 *Hospedagem e Implantação*  
Para hospedar o projeto em plataformas como *Netlify* ou *Render*:  
1. Compile os arquivos de produção com npm run build.  
2. Faça o upload da pasta build para a plataforma de hospedagem.  
3. Configure a URL base para o backend, se necessário.  

---

## 🛡️ *Suporte e Documentação*  
Encontre ajuda:  
- [Documentação React](https://reactjs.org/docs/getting-started.html)  
- [Documentação Material-UI](https://mui.com/material-ui/getting-started/overview/)  
- [Repositório GitHub](https://github.com/breno-fernandes1/pagueBem-13-Front)  

📝 Contribuições são bem-vindas! Reporte issues ou envie pull requests diretamente no repositório.  

---  

💻 *Feito com ♥ pelo Squad 13 da Pague Bem.*
