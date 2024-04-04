const express = require('express');
const bodyParser = require('body-parser');
const createConnection = require('./src/mongoDb');
const mathRouter = require('./src/controllers/mathController');
const authRouter = require('./src/controllers/authController');
const userRouter = require('./src/controllers/userController');
const authMiddleware = require('./src/middleware/authMiddleware');

const app = express();

async function bootstrap() {
  await createConnection();

  app.use(bodyParser.json());
  app.use(authRouter);
  app.use('/math', authMiddleware, mathRouter);
  app.use(userRouter);
  
  app.get('/', (req, res) => {
    res.json({ message: 'Olá, mundo!' });
  });
  
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}

bootstrap();