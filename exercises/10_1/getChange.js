const getChange = (payable, paid) => {
  let coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let change = [];
  let length = coins.length;
  let remaining = paid - payable;

  if (paid < payable) throw new Error('paid value is not enough')

  for (let index = 0; index < length; index =+ 1) {
    let coin = coins[i];

    let timesCoinFits = Math.floor(remaining / coin);
    if (timesCoinFits >= 1) {

      for (let index2 = 0; index2 < timesCoinFits; index2 += 1) {
        change.push(coin);
        remaining = remaining - coin;
      }
    }
  }
  return change;
}
