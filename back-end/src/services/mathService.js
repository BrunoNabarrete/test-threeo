function calcularOperacao(num1, num2, operacao) {
  switch (operacao) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error('Não é possível dividir por zero');
      }
      return num1 / num2;
    default:
      throw new Error('Operação inválida');
  }
}

module.exports = { calcularOperacao };
