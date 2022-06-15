function printNumberIncreese(a, b) {
  if (a > 0 && b > 0 && a < b) {
    for (let i = a; i <= b; ++i) {
      console.log(i);
    }
  }
}

function printNumberDecreese(a, b) {
  if (a > 0 && b > 0 && a < b) {
    for (let i = b; i >= a; --i) {
      console.log(i);
    }
  }
}

function isOddNumber(n) {
  return n % 2 == 1;
}

function sumOddNumbers(a, b) {
  let min;
  let max;
  let sum = 0;
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }

  for (let i = min; i <= max; ++i) {
    if (isOddNumber(i)) {
      sum += i;
    }
  }
  return sum;
}

function countFolding(number) {
  number *= 1000;
  let count = 0;
  let size = 0.1;
  while (size < number) {
    size *= 2;
    count++;
  }

  return count;
}

function countYear(dad, son) {
  let count = 0;
  while (dad != son * 2) {
    count++;
    dad++;
    son++;
  }

  return count;
}

function countChickenDog() {
  let chicken = 1;
  let dog = 36 - chicken;
  let tong = dog * 4 + chicken * 2;
  while (tong != 100) {
    chicken++;
    dog = 36 - chicken;
    tong = dog * 4 + chicken * 2;
  }

  return [dog, chicken];
}

console.log(countChickenDog());
