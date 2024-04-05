# Projeto Threeo

O projeto Threeo é uma aplicação web que consiste em um conjunto de funcionalidades para criação de contas de usuário, login e uma calculadora. A calculadora utiliza uma API no backend desenvolvida em Node.js e um banco de dados MongoDB para persistência dos dados dos usuários.

## Funcionalidades

- **Criação de Conta**: Permite aos usuários criar uma nova conta fornecendo informações como nome de usuário, e-mail e senha.
- **Login**: Permite aos usuários autenticarem-se na aplicação utilizando as credenciais fornecidas durante o processo de criação de conta.
- **Calculadora**: Uma calculadora básica que permite aos usuários realizar operações matemáticas simples, como adição, subtração, multiplicação e divisão.

## Tecnologias Utilizadas

- **Frontend**: Desenvolvido em React.js, utilizando Next.js como framework para renderização do lado do servidor.
- **Backend**: Desenvolvido em Node.js, utilizando Express.js para criação de rotas da API.
- **Banco de Dados**: MongoDB foi escolhido como banco de dados para armazenamento dos dados dos usuários.
- **Docker**: O projeto está dockerizado, facilitando a execução do frontend e do backend.

## Como Executar o Projeto

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/BrunoNabarrete/threeo.git
Frontend:

Navegue até o diretório front-end/threeo-test.
Execute o comando docker-compose up.
Backend:

Navegue até o diretório back-end.
Execute o comando docker-compose up.
Acesso à Aplicação
O frontend estará disponível em http://localhost:3002.
O backend estará disponível em http://localhost:3000.
Contribuindo
Se você deseja contribuir para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Toda contribuição é bem-vinda!

Licença
Este projeto está licenciado sob a MIT License.
