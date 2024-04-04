const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./src/controllers/authController');
const authMiddleware = require('./src/middleware/authMiddleware');
const mathController = require('./src/controllers/mathController');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Olá, mundo!' });
})

app.post('/login', authController.login);

app.post('/math', authMiddleware, mathController.realizarOperacao);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
