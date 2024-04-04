function calcularOperacao(num1, num2, operacao) {
  switch (operacao) {
    case 'somar':
      return num1 + num2;
    case 'subtrair':
      return num1 - num2;
    case 'multiplicar':
      return num1 * num2;
    case 'dividir':
      if (num2 === 0) {
        throw new Error('Não é possível dividir por zero');
      }
      return num1 / num2;
    default:
      throw new Error('Operação inválida');
  }
}

module.exports = { calcularOperacao };
