function ExampleConstructor() {

}

console.log('value of protype:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);

var newfunction = new ExampleConstructor();

console.log(newfunction);

var newInstance = (newfunction instanceof ExampleConstructor);

console.log('value of newInstance:', newInstance);
