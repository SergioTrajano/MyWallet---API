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
GET /transaction (autenticada)
    - Rota para listar todos as transações;
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
    - response: retorna statusCode 422 caso o header seja invalido;
                retorna statusCode 404 caso o token não seja um encontrado ou caso o usuario não possua transações cadastradas;
                retorna statusCode 200 e as transações do usuario no formato 
                [
                  { 
                     value: 30,
                     description: "Lorem ipsulom",
                     isPositive: true,
                     date: "MM/DD/YYYY",
                  }, ...
                ]
                
```

```yml 
POST /transaction (autenticada)
    - Rota adicionar novas transações;
    - headers: { "Authorization": "Bearer $token" }
    - body: { 
               value: 30,
               description: "Lorem ipsulom",
               isPositive: true,
               date: "MM/DD/YYYY",
    }
    - response: retorna statusCode 422 caso o header ou o body invalidos;
                retorna statusCode 404 caso o token não seja encontrado no banco de dados;
                retorna statusCode 201 caso a transação seja cadastrada.
```

***

## 🏁 Rodando a aplicação

Certifique-se que voce tem a ultima versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone [https://github.com/luanalessa/projeto-backend.git](https://github.com/SergioTrajano/MyWallet---API)
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

É necessário fazer a instalação do MongoDB. COm o MongoDb instalado, rode o seguinte comando em um terminal (não feche esse terminal enquanto a aplicação estiver rodando)

```
mongod --dbpath ~/.mongo
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```

:stop_sign: Não esqueça de repetir os passos acima com o [repositório](https://github.com/SergioTrajano/MyWallet-) que contem a interface da aplicação, para testar o projeto por completo.
