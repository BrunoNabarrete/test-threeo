# Backend - Threeo Test

Este é o backend do projeto Threeo Test, uma API que fornece três endpoints para lidar com a autenticação de usuários e realizar operações matemáticas.

## Endpoints

1. **Math:**
   - **Método:** POST
   - **URL:** /math
   - **Corpo da Requisição:** JSON
     ```json
     {
       "num1": 10,
       "num2": 5,
       "operacao": "+"
     }
     ```
   - **Descrição:** Este endpoint realiza operações matemáticas com base nos parâmetros fornecidos e retorna o resultado.

2. **Login:**
   - **Método:** POST
   - **URL:** /login
   - **Corpo da Requisição:** JSON
     ```json
     {
       "email": "usuario@example.com",
       "senha": "senha123"
     }
     ```
   - **Descrição:** Este endpoint é usado para autenticar usuários com base no email e senha fornecidos.

3. **Auth (Criar Conta):**
   - **Método:** POST
   - **URL:** /auth
   - **Corpo da Requisição:** JSON
     ```json
     {
       "nome": "Usuário Teste",
       "email": "usuario@example.com",
       "senha": "senha123"
     }
     ```
   - **Descrição:** Este endpoint é usado para criar uma nova conta de usuário.

## Autenticação JWT

- A autenticação JWT é necessária para acessar o endpoint /math. 
- Após o login bem-sucedido, o token JWT é retornado e deve ser incluído no cabeçalho de autorização (Bearer Token) para acessar o endpoint /math.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)

