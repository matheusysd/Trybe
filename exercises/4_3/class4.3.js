function sumArray(array) {
  if (array == null)
  {
      return 0;
  }
  else if (array.length < 2)
  {
      return 0;
  }
  else
  {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
          total += array[i];
      }
      return total;
  }
}
let arr = [ 6, 2, 1, 8, 10];
// let arr = { 1, 1, 11, 2, 3}
console.log(sumArray(arr));
