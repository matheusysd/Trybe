const assert = require('assert');
// escreva a função factorial para passar nos testes abaixo:
const factorial = number => {
  return (number < 2) ? 1 : factorial(number-1) * number;//Se o número for menor que 2, o fatorial é 1
  //se não a função é chamada de novo com number - 1 e sendo multiplicado por number.
}
const in1 = 5;
const exp1 = 120;

const in2 = 9;
const exp2 = 362880;

const in3 = 1;
const exp3 = 1;

const in4 = 0;
const exp4 = 1;

const in5 = 3;
const exp5 = 6;

const out1 = factorial(in1);
const out2 = factorial(in2);
const out3 = factorial(in3);
const out4 = factorial(in4);
const out5 = factorial(in5);

assert.strictEqual(out1, exp1);
assert.strictEqual(out2, exp2);
assert.strictEqual(out3, exp3);
assert.strictEqual(out4, exp4);
assert.strictEqual(out5, exp5);
