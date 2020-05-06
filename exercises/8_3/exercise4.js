const assert = require('assert');

const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);//Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.deepEqual([1, 2, 3, 4], myRemove([1, 2, 3, 4], 1))//Verifique se o array passado por parâmetro não sofreu alterações
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado