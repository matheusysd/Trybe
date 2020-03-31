function verifyLength(array) {
  let higherLength = 0, name = ' ';
  for (index in array) {
    if ((array[index]).length > higherLength) {
      higherLength = name.length;
      name = array[index]
    }
  }
  return name;
}

let arrTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(verifyLength(arrTest));