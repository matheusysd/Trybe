const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:
const addOne = arr => {
  const newArray = [];//Novo array criado para que não haja alteração no array usado como parâmetro
  for (let index = 0; index < arr.length; index += 1) {
    newArray[index] = arr[index] +1;//Atribuindo a posição 'index' do novo array o valor de cada posição do array anterior + 1.
  }
  return newArray;//Retornando novo array onde os valores de cada posição são acrescidos em 1;
}
//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
