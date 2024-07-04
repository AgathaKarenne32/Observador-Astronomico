# Observador Astronômico
Meu primeiro projeto em JavaScript

## Descrição
Este é um projeto de observação astronômica que permite aos usuários obter os melhores horários para observar objetos celestes. A aplicação é composta por um backend em Node.js com Express e um frontend simples servido por `http-server`.

## Funcionalidades
- Entrada do nome de um objeto celeste.
- Consulta aos melhores horários de observação para o objeto especificado.
- Exibição dos horários de observação em uma lista.

## Tecnologias Utilizadas
- Node.js
- Express
- `node-fetch`
- `cors`
- HTML/CSS/JavaScript
- `http-server`

## Pré-requisitos
- Node.js e npm instalados.

## Como Executar

### Backend

1. Navegue até o diretório `backend`:

    ```bash
    cd backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor backend:

    ```bash
    npm start
    ```

### Frontend

1. Navegue até o diretório `frontend`:

    ```bash
    cd frontend
    ```

2. Instale o `http-server` globalmente (se ainda não o fez):

    ```bash
    npm install -g http-server
    ```

3. Inicie o servidor HTTP:

    ```bash
    http-server
    ```

4. Abra o navegador e vá para `http://localhost:8080`.

## Estrutura do Projeto

```plaintext
your-project-directory/
|-- backend/
|   |-- node_modules/
|   |-- server.js
|   |-- package.json
|-- frontend/
|   |-- index.html
|   |-- app.js
|   |-- styles.css
