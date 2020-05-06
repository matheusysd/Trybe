const getChange = (payable, paid) => {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = paid - payable;
  if (paid < payable) throw new Error('paid value is not enough');//Se o valor pago for menor que o valor que deve ser pago, uma mensagem de erro aparece.
  while (remaining > 0) {//Enquanto o valor que sobrou(valor pago - valor que devia ser pago) for maior que 0, o troco ira ser gerado.
    for (let index = 0; index < length; index += 1){
      if (remaining >= coins[index]){//Checkando se o valor que sobrou é maior ou igual ao valor das moedas;
        remaining -= coins[index];//O valor que sobrou sendo maior que o das moedas, sofrerá uma redução pelo valor das moedas, simbolizando o troco;
        change.push(coins[index]);//O array do troco recebe o valor da moeda.
        break;
      }
    }
  }
  return change;//Retorna o valor do troco
}
const assert = require('assert');

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);
