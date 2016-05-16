var person = {
	name: 'Amelia',
	age: 25
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

// turn JSON into js object
var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log("CHALLENGE AREA");

var animal = '{"name": "Delilah"}';

var animalObject = JSON.parse(animal);

animalObject.age = 10;

// convert back to JSON
animal = JSON.stringify(animalObject);

// log out
console.log(animal)