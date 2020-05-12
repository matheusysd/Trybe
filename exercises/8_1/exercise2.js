'use strict'

const longestWord = sentence => {
  const words = sentence.split(' ');
  let longest = '';
  for (let word in words) {
    if (words[word].length > longest.length) {
      longest = words[word];
    }
  }
  console.log(`A maior palavra da frase é: ${longest}.`)
}
longestWord('Qual a maior palavra dessa frase?.')