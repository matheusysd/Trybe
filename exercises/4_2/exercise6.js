let number = 83;

for (let index = 2; index <= number / 2 + 1; index++) {
    if (number % index == 0) {
        console.log(`${number} isn't prime!`);
        break;
    }
    else {
      console.log(`${number} is prime!`);
      break;
    }
}
