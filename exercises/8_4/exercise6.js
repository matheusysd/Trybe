const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let number = 0;//Variável que tem o valor que deve ser substituir as vogais
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      results += (number += 1);//Atribuindo a variável results oo números que substituirão as vogais em determinada posição
    }
    else{
      results += characters[index];//Atribuindo a variável results as consoantes
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';
const assert = require('assert');
assert.deepStrictEqual(removeVowels(parameter), result);

/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
