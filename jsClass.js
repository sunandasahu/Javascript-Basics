// Class is a better option compared to object, because in object we can only use that for a singel object. 
//But in class we can create n numbers of object having same propertied
// We can use the properties and functions of this class by making it public e.g. exporting it
// And we can call it from different files by importing it. I am going to call this properties from jsObject file
module.exports= class Person{

    // In multiple ways we can define properties in a class
    // Here this age propery is a global property, that is not going to change with the change in object
    age = 25
    // we can create property by using getter method
    get location(){ // if there is a get in the beginning , it is not a method. This is a property
      return 'london'
    }
    // constructor is a method that is call when we create an object of a class
    // The 'firstName' and 'lastName' properties are instance properties, that will change with the change in object
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    // Function is not same as getter property or constructor
    fullName = function(){
        console.log(this.firstName+ " "+ this.lastName)
    }


}
// We can create object of the class outside of the class

// Commenting this so that I am calling this class from another file

// let person1 = new Person('sunanda','Sahu')
// // we can access the properties of the class with object of the class
// person1.age
// console.log(person1.fullName())
// console.log(person1)
// // We can create another object of class person
// let person2 = new Person('Andrew', 'Lewis')
// console.log(person2)
// //export default Person;
