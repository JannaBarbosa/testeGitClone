const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ message: "Olá Mundo, este é meu novo repositório clonado!" });
})

app.get('/rotaola', (req, res) => {
    res.status(200).send({ message: "Oi eu sou a rota Olá!" });
})

app.listen(4001, () => {
    console.log("Api rodando na porta 4001");
})
