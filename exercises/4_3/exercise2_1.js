function verifyPalindrome(string) {
  for (index in string) {
    if (string[index] === string[string.length - 1 - index]) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(verifyPalindrome("arara"));