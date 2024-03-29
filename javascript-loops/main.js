/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var number = [];
  var currentNumber = (1);
  while (currentNumber < 11) {
    number.push(currentNumber);
    currentNumber++;

  }
  return number;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = (0);
  while (currentNumber < 20) {
    currentNumber += 2;

    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = (1);
  var repeated = ' ';
  while (count < times) {
    count++;
    repeated += word;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(`${key}`);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var value in object) {
    values.push(object[value]);
  }
  return values;
}
