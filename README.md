# Descrição do Projeto

Este projeto é uma aplicação web de login desenvolvida com React e TypeScript.

## Funcionalidades:

*   **Página de Login:** A página inicial (`Home.tsx`) exibe um formulário de login que solicita um email e uma senha.
*   **Autenticação:** Ao submeter o formulário, a aplicação chama uma função de `login` (definida em `src/services/login.tsx`) para verificar as credenciais.
*   **Gerenciamento de Sessão:** O estado de autenticação do usuário (se está logado ou não) é gerenciado globalmente por um "Contexto" do React chamado `AppContext`.
*   **Componentes de UI:** O projeto utiliza a biblioteca Chakra UI para os componentes visuais, como botões, cartões e layout.

## Navegação:

A aplicação usa `react-router-dom` para gerenciar as rotas. Existem principalmente três rotas:
*   `/` (a página de login)
*   `/conta/:id` (uma página protegida, acessível apenas após o login)
*   `/infoconta` (página com informações da conta)


## Tecnologias Utilizadas:

*   **React**
*   **TypeScript**
*   **Chakra UI**
*   **React Router**