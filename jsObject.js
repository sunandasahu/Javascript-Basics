// Object can be a variable holding multiple properties.

let person = {
    firstName : 'Tom',
    lastName : 'Hank',
    age : 54,
    // Object property can be a function too
    fullName : function(){
        console.log(this.firstName +" "+ this.lastName)
    }
}

// Access the properties of an object by '.' operator
console.log(person.fullName()) // Because fullName property is a function, we have to give the bracket to get the value
console.log(person.firstName)
console.log(person['firstName']) // access properties by array method
person.gender = 'Male' // Adding new property to the object
console.log(person)
delete(person.age) // deleting property from the object
console.log(person)

// Checking if property exists in the object

console.log('age' in person) // It will return a bolean value
let isAgeExist = 'age' in person

if(!isAgeExist)  // if property does not exit , add it
{
    person.age = 54
}

person.lastName = 'Hicks'

// Iterate through all properties in an object. It is same as for each loop in java. 
// We use to get the key and values of an object
// This is called 'for in loop'

for (let key in person) // Enhance for loop
{
    console.log(person[key])  // getting value of a key by array method
}

//for - of loop . We use to get value from an array

let colors = ['Red', 'Blue', 'Green']
for(let col of colors)
    console.log(col)

// getting the array value using for in loop
for(let col in colors)
console.log(col, colors[col])




