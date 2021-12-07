function convertMinutesToSeconds(minutes) {
  var convert = (minutes * 60);
  return convert;
}

var sumConvertMinutesToSeconds = convertMinutesToSeconds(5);

console.log('convertMinutesToSeconds:', sumConvertMinutesToSeconds);

function greet(name) {
  var greeting = ('Hey,' + name);
  return greeting;
}
var name = ' Beavis';
var sumGreeting = greet(name);

console.log('value of name:', sumGreeting);

function getArea(width, height) {
  var area = (width * height);
  return area;
}

var sumOfArea = getArea(17, 42);
console.log('value of area:', sumOfArea);

var person = {
  firstName: 'Dustin',
  lastName: 'Davis'
};

function getFirstName(person) {
  var name = person.firstName;
  return name;
}
var firstName = getFirstName(person);
console.log('value of name:', firstName);

var array = ['propane', 'and', 'propane', 'accessories'];

function getLastElement(array) {
  var last = array.length - 1;
  var lastElement = array[last];
  return lastElement;
}
console.log('value of array:', getLastElement(array));
