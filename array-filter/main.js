const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

const overFive = numbers.filter(number => number > 5);
console.log(overFive);

const startsWithE = names.filter(name => name.startsWith('E'));
console.log(startsWithE);

const haveD = names.filter(name => name.startsWith('D') || name.includes('d'));
console.log(haveD);