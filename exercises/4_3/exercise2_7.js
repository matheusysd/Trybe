function verifyEnding(word, ending) {
  let endWord = word.substr((word.length - ending.length));
  if (ending == endWord) {
    return true;
  } else {
    return false;
  }
}
console.log(verifyEnding('trybe', 'be'));