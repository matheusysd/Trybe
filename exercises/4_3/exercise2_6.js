function sumUntilN(number) {
  let sum = 0;
  for (let index = 0; index <= number; index++) {
    sum += index;
  }
  return sum;
}
let n = 5;
console.log(sumUntilN(n));
