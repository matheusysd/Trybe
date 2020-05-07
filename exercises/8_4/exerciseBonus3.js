const getLargestNumber = (array) => {
  let largestNumber = 0;//Variável que será usada como comparação iniciando como 0;
  for (let i = 0; i < array.length; i += 1) {
      if (array[i] > largestNumber) {//Verificando se a o número dentro do aray é maior que a variável de verificação;
          largestNumber = array[i];//Se a condição anterior for verdadeira, a variável de maior número passa a ter o valor do número do array;
      }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const assert = require('assert');
assert.deepStrictEqual(getLargestNumber(parameter), result);
/*
Use a variável parameter como parâmetro da função acima, escreva testes
para verificar se a mesma está retornando a como se vê na variável result
e, caso não esteja, altere o código para que ele passe nos testes.
Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
a função aos poucos:
*/
