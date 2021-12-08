var num1 = 98;
var num2 = 156;
var num3 = 21;
var maximumValue = Math.max(num1, num2, num3);

console.log('value of MaxValue:', maximumValue);

var heros = [
  'Korg',
  'Venom',
  'DeadPool',
  'John Constantine'
];

var randomNumber = Math.random();

function random(randomNumber) {
  var math = randomNumber * heros.length;
  return math;
}

var randomIndex = Math.floor(random(randomNumber));

console.log('randomIndex:', randomIndex);

var randomHero = heros[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho'
  },
  {
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: 'The Book Thief',
    author: 'Markus Zusak'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Dustin Davis';

var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
