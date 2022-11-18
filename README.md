# Calculadora de antecipação 📱

## ✨Sobre o projeto

Este projeto é uma aplicação front-end que permite aos clientes calcularem quais valores receberão caso optem por antecipar o recebimento, no qual possui integração com API para realização do cálculo.

<br>

## 🚴‍♂️Passo a Passo

Para rodar localmente, primeiro rode o comando:
> ```yarn``` para instalar as dependências do projeto.
>  

Em seguida:
> ```yarn dev``` para rodar a aplicação.

<br>

## 👨‍💻Tecnologias e bibliotecas

| Tecnologias | Bibliotecas |
| :---: | :---: |
| HTML5 | React hot-toast |
| CSS3 | Axios  |
|TypeScript | Yup |
|React.JS | Styled Components |

<br>

## 🔌API utilizada

Esta aplicação está consumido a API

Link API Frontend Challenge

/POST

Request:
```python
$ curl --request POST
----------url <https://frontend-challenge-7bu3nxh76a-uc.a.run.app>
----------header 'content-type: application/json'
----------data '{
---------------- "amount": 15000,
---------------- "installments": 3,
---------------- "mdr": 4,
---------------- "days": [30, 60, 90]
---------------- }'
```

<br>

## 🏛 Arquitetura da Aplicação

Segue o padrão:

    src
    ├───components
    │   ├───MainForm
    │   └───Result
    ├───globalStyles
    ├───interfaces
    ├───pages
    │   └───Home
    ├───providers
    │   └───Antecipation
    └───shemas
