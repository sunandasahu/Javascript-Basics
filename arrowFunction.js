// We can use arrow (=>) functions in Js, where we don't need a name.

// No parameter arrow function need a bracket

const greetMsg = () => 'Good morning Sunanda!'
console.log(greetMsg())

// One parameter arrow function. Here num is a parameter. If there is only one parameter , bracket is not needed.

const square = num => num * num
console.log(square(5))

// More than one parameter arrow function, paranthesis is mandatory 

const add = (a,b) => a+b
console.log(add(6,4))

// arrow function in an object

let person = {
    firstName: 'Sunanda',
    lastName: 'Sahu'
}
let getFullName = person => `${person.firstName} ${person.lastName}` // I am using tick here (``) for string
console.log(getFullName(person))

// Handle default values in an object

const greet = (userName = 'guest', age = 0) => `'Hello ${userName}! You are ${age} years old !`
console.log(greet()) // printing default values

console.log(greet('Tom', 32)) // It override the default falue and print the given value

// rest parameter or varargument. It is define as (...). It means it will take multiple parameters . And act like an array

let sum = (...numbers) => numbers.reduce((accumulate, num) => accumulate+num, 0)
console.log('Sum of all numbers is : '+sum(1,2,3,4,5))

// Find max value using inbuilt method

let maxValue = (a,b,c,d) => {
    return Math.max(a,b,c,d)
}
console.log(maxValue(56,76,93,23))

