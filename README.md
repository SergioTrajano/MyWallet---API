# <p align = "center"> MyWallet API </p>

<p align="center">
   <img src="https://pics.clipartpng.com/midle/Money_Bag_PNG_Clip_Art-3015.png"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-SergioTrajano-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/SergioTrajano/MyWallet---API?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Esta é a API para uma aplicação de uma carteira digital. Por meio desta API é possível fazer cadastro e login, gerando um token unico para o usuario. Em posse do token, o usuario efetuar requisições para arquivar suas transações e consulta-las.

***

## :computer:	 Tecnologias e Conceitos

- REST APIs
- Refresh tokens com uuid
- Node.js
- JavaScript
- MongoDB com Mongoose
- Encriptamento a partir de hashs com o bcrypt

***

## :rocket: Rotas

```yml
POST /users
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
        "nome": "Lorem ipsum",
        "email": "lorem@gmail.com",
        "senha": "loremipsum"
    }
    - responses: retorna statusCode 422 caso houver algum erro no corpo da requesição;
                 retorna statusCode 201 para sucesso no cadastro.         
```
    
```yml 
GET /users
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "lorem@gmail.com",
    "senha": "loremipsum"
    }
    - response: retorna statusCode 422 caso houver algum erro no corpo da requesição;
                retorna statusCode 404 caso as credenciais sejam inválidas;
                retorna statusCode 200 e um corpo no formato 
                { name: "nome-do-usuario, token: "token-do-usuario" }
```
    
```yml 
GET /usuarios (autenticada)
    - Rota para listar todos os usuários
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml
GET /usuarios/:id (autenticada)
    - Rota para listar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
PUT /usuarios/:id (autenticada)
    - Rota para atualizar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "nome": "Lorem ipsum2",
        "email": "lorem2@gmail.com",
        "senha": "loremipsum2"
    }
```
 
```yml
DELETE /usuarios/:id (autenticada)
    - Rota para deletar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***

## 🏁 Rodando a aplicação

Este projeto foi inicializado com o [Create React App](https://github.com/facebook/create-react-app), então certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/luanalessa/projeto-backend.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/luanalessa/projeto-frontend.git) que contem a interface da aplicação, para testar o projeto por completo.
