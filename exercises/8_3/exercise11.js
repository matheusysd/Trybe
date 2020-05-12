const assert = require('assert');

const isAbove = (num1, num2) => {
  return num1 > num2;
}

// implemente seus testes aqui
assert.deepEqual(isAbove(1, 2), false);//Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
assert.deepEqual(isAbove(7, 2), true);//Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.