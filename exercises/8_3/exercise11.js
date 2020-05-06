const assert = require('assert');

const isAbove = (num1, num2) => {
  return num1 > num2;
}

// implemente seus testes aqui
assert.deepEqual(isAbove(1, 2), false);
assert.deepEqual(isAbove(7, 2), true);