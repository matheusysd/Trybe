const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:
const removeMiddle = array => {
  return array.splice(Math.trunc(array.length/2), 1);//Remove o elemento que tem o índice
                                                    //que tem o valor igual a metade do tamanho do array.
}
const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
