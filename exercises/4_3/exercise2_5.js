function mostRepeat(array) {
  let cont = 0, num = 0, cont2 = 0;
  for (index in array) {
    for (index2 in array) {
      if (array[index2] == [index]) {
        cont = cont + 1;
        if (cont > cont2) {
          num = array[index];
          cont2 = cont;
          cont = 0;
        }
      }
    }
    }
  return num;
}
let arrTest = [2, 3, 2, 5, 8, 2, 3];
console.log(mostRepeat(arrTest));