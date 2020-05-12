'use strict'

// const fatorial = n => {
//   if (n == 0 || n == 1) {
//       return 1;
//   } else {
//    return ( n * fatorial(n - 1) );
//   }
// }
const fatorial = n => (n<2) ? 1 : fatorial(n-1) * n;
console.log(fatorial(5));