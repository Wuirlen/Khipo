<h1 align="center">
  🚀 CRUD NestJS
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<br>

<p align="center">
  <img alt="CRUD NestJS" src=".github/banner-crud-nestjs.png" width="80%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NestJS](https://nestjs.com/): framework utilizado para criação da aplicação.
- [Postgres](https://www.postgresql.org/): banco SQL utilizado para armazenar os dados.
- [Docker-compose](https://docs.docker.com/compose/install/): utilizado para criar e rodar o container do banco de dados.
- [Jest](https://jestjs.io/): utilizado para escrever os testes da aplicação.
- [GitFlow](https://github.com/nvie/gitflow): utilizado no fluxo de desenvolvimento.
- [Swagger](https://swagger.io/): utilizado para documentar a aplicação.

## 💻 Projeto

Projeto aplicando alguns conceitos mais avançados como: TDD, GitFlow, Docker, etc.

## ⚡ Como rodar

### Requisitos

- [Node.js](https://nodejs.org/en/).
- [NestJS CLI](https://docs.nestjs.com/first-steps).
- [Yarn](https://yarnpkg.com/) ou se preferir, pode usar o npm _(já vem com o node)_.
- [Docker](https://www.docker.com/) e [Docker-compose](https://docs.docker.com/compose/install/) _(opcional)_.

### Subir o banco

- crie uma cópia do `.env.example` como `.env` e defina suas variáveis do banco.
- suba o banco de dados com docker: `docker-compose up -d`.

_(se você não estiver usando o docker, é necessário criar o banco manualmente)_.
- rode as migrations: `yarn typeorm migration:run`.

### Rodar a aplicação

- para rodar a aplicação: `yarn start`.
- para rodar a aplicação em modo watch: `yarn start:dev`.
- a aplicação estará disponível no endereço: `http://localhost:8080`.
- a documentação estará disponível no endereço: `http://localhost:8080/api`.

### Rodar os testes

- para rodar os testes unitários: `yarn test`.
- para ver a cobertura dos testes unitários: `yarn test:cov`.
- para rodar os testes e2e: `yarn test:e2e`

