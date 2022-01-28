const takeAChance = require('./take-a-chance');

const promise = takeAChance('Dustin');
promise.then(data => {
  console.log(data);
});
promise.catch(error => {
  console.error(error);
});
