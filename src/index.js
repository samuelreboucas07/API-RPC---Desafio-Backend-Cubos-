const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, (req, res) => {
    console.log("Servidor rodando na porta 3333.")
});