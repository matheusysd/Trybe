const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:
const addAllnumbers = number => {
  let sum = 0;//Variável de soma criama
  for (let index = 0; index < number.length; index += 1) {
    sum += number[index];//Adicionando a variável de soma os valores de cada posição.
  }
  return sum;//Retornando o resultado da soma
}
//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
