'use strict'

let btn = document.querySelector('#button')
let count = document.querySelector('#count')

btn.addEventListener('click', () => {
  count.innerHTML = parseInt(count.innerHTML, 10) + 1;
});