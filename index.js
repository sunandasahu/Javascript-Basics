console.log('Hello world!');
let name = 'sunanda';
let age = 30;
let isApproved = true;
let firstName;
let lastname = null;

// create an object with properties. It takes key value pair

let person = {
  name: 'Adam',
  gender: 'male',
  age: 35,
  height: 6.1
}
console.log(person);
// We can access to a property value by dot operator
console.log(person.name);

//Array in JS

let selectedColors = ['red','yellow']
console.log(selectedColors);
console.log(selectedColors.length);
selectedColors[2]='green';
console.log(selectedColors);

// We can access to an element of array by calling index

console.log(selectedColors[2]);

// A 'parameter' is a value we provide when instanciating a function. 
// But an 'argument' is a value we provide when we call the function

function greet(firstName) {
    console.log('Hello ' + firstName + '!');
}
greet('Sunanda');

// If we will not provide any argument for a parameter, it will be undefined 
function welcome(firstName, lastName) {
    console.log('Welcome ' + firstName + ' ' + lastName);
}
welcome('Arushi')

//returned: Welcome Arushi undefined
