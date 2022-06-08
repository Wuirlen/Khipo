### Subir o Backend

- vá até o diretório `backend` execute o comando `npm install` para instalar as dependências do projeto.
- crie uma cópia do `.env.example` como `.env` e defina suas variáveis do banco.
- execute o comando : `docker-compose up -d` para subir o bando de dados.
- rode as migrations: `yarn typeorm migration:run`.
- execute `npm start` ou `yarn start`.
- a documentação da api estará disponível no endereço: `http://localhost:8080/api`. 


### Rodar os testes no backend
- para rodar os testes unitários: `yarn test`.
- para ver a cobertura dos testes unitários: `yarn test:cov`.
- para rodar os testes e2e: `yarn test:e2e`



### Subir o Frontend

- vá até o diretório `frontend` execute o comando `npm install` para instalar as dependências do projeto.
- execute `npm run dev` ou `yarn dev`.
- a aplicação está disponível em: `http://localhost:3000`