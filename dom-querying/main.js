
var elementOne = document.querySelector('h1');
console.log('$heading', elementOne);
console.dir(elementOne);

var firstId = document.querySelector('#explanation');
console.log('$explanation', firstId);
console.dir(firstId);

var firstClass = document.querySelector('.hint');
console.log(firstClass);
console.dir(firstClass);

var allP = document.querySelectorAll('p');
console.log('$paragraphs', allP);

var allClass = document.querySelectorAll('.example-link');
console.log('$links', allClass);
