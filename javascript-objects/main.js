var student = {
  firstName: 'Dustin',
  lastName: 'Davis',
  age: 21
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.preaviousOccupation = 'Instructional Aide';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.preaviousOccupation:', student.preaviousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Ducati',
  model: 'Panigal V4',
  year: 2020
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log('value of ["color"]:', vehicle.color);
console.log('value of ["isConvertible"]:', vehicle.isConvertible);
console.log('value of vehicle:', vehicle);
var pet = {
  name: 'Rylee',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
