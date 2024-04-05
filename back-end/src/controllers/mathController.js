const express = require('express');
const mathService = require('../services/mathService');

const router = express.Router();

router.post('/', (req, res) => {
  const { num1, num2, operacao } = req.body;
  try {
    const resultado = mathService.calcularOperacao(+num1, +num2, operacao);
    res.json({ resultado });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;