const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = word => {
  for (let index = 0; index < word.length; index += 1) {
    word[index] = word[index].length;//Atribuindo a cada posição do array o valor do tamanho de cada palavra.
  }
  return word;//Retornando o array alterado.
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
