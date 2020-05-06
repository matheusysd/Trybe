const assert = require('assert');

const mySum = (arr) => {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
assert.deepEqual(mySum([1, 2, 3, 4]), 10);
assert.deepEqual(mySum([1, -2, -3, 4]), 0);