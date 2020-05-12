const assert = require('assert')

const sum = (...nums) => { 
  let result = 0;
  for (num of nums) {
    result += num;
  }
  return result;
};

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
    