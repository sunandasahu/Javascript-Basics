// To access the properties of another class, we need to import the class
const Person = require('./jsClass') // importing Person class . We can create object of Person class to access the properties
//import Person from "./jsClass"


let day = "Wednesday"
let newDay = day+ " is a funday"
console.log(newDay)
// find index of a sub string

console.log(newDay.indexOf('day')) // If we provide only one argument , it will find the first sub string. 6
console.log(newDay.indexOf('day',7)) // if you provide the next index as other parameter , it will get the index of second substring
// to find how many times this substring present in the array, we need to iterate with while loop
let value = newDay.indexOf('day')
let count = 0
while(value !== -1){
    count++
    value = newDay.indexOf('day', value+1)
}
console.log(count)

// creating object of Person class
let person3 = new Person('Aaradhya','Sahu')
console.log(person3.age)
console.log(person3.fullName())
