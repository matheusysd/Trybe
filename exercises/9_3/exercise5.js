const assert = require('assert')

const myList = [1, 2, 3]

const swap = ([num1, num2, num3]) => [num3, num2, num1]  //Outra forma de fazer seria [num1, num2, num3].reverse();
const swappedList = swap(myList)

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)
    
