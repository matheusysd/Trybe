const greetPeople = (people) => {
  let greeting = 'Hello ';
  const greetings = [];//Array de saída criado
  for (let person in people) {
     greetings[person] = greeting + people[person];//Atribuindo a cada posição do array de saída o valor do cumprimento (greetings) e o nome da pessoa(people).
  }
  return greetings;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const assert = require('assert');
assert.deepStrictEqual(greetPeople(parameter), result)
/*
  Use a variável parameter como parâmetro da função acima, escreva testes
  para verificar se a mesma está retornando a como se vê na variável result
  e, caso não esteja, altere o código para que ele passe nos testes.
  Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
  a função aos poucos:
*/
