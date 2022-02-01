const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const add = (x, y) => {
  return x + y;
};

const sum = numbers.reduce(add);
console.log('sum:', sum);

const multiply = (x, y) => {
  return x * y;
};

const product = numbers.reduce(multiply);
console.log('multiply:', product);

const getBalance = (x, y) => {
  if (y.type === 'deposit') {
    return x + y.amount;
  }

  if (y.type === 'withdrawal') {
    return x - y.amount;
  }
};

const balance = account.reduce(getBalance, 0);
console.log('balance:', balance);

const combine = (x, y) => {
  Object.assign(x, y);
  return x;
};
const composite = traits.reduce(combine, {});
console.log('composite: ', composite);
