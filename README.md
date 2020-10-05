# API-RPC---Desafio-Backend-Cubos-

* [Sobre](#sobre)

* [Tecnologias](#tecnologias)

* [Como usar](#Como-usar)

* [Endpoints](#endpoints)

# Sobre

Projeto requerido no processo seletivo para estágio como desenvolvedor Backend na empresa Cubos Tecnologia.

Desenvolvimento de uma API RPC utilizando nodejs.



## Tecnologias

* [NodeJs](https://nodejs.org/en/)
* [Lowdb](https://github.com/typicode/lowdb)

## Como usar

Inialmente é necessaŕio clonar o repositório.

``` https://github.com/samuelreboucas07/API-RPC---Desafio-Backend-Cubos-.git ```

**Iniciar servidor** 
```
npm install 
npm start
```

## Endpoints

* /createUser - Cadastra usuário
* /addToLine - Coloca usuário na última posição da fila
* /findPosition -  Retorna a posição de um usuário a partir de seu email
* /showLine - Lista os usuários da fila e suas respectivas posições
* /filterLine - Lista os usuários filtrados a partir de um parâmetro
* /popLine - Tira a pessoa na primeira posição da fila

