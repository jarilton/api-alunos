const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3333;

app.get('/teste', (req, res) => res
    .status(200)
    .send({Message: "Testando a requisição..."})
)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

module.exports = app;