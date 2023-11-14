// A class can inherit all properties from another class by Inheritence 
// The class that is inheriting properties is called child class/ sub class
// The class from where child class is inheriting property is called Parent class or Super class

const Person = require("./jsClass");

class Pet extends Person{
        // We can access all properties of parent class without writing the same code.
       // But  if we want to change something in the existing property , we can overide the propert
    get location()
    {
      return 'blueCross';
    }

    constructor(firstName, lastName) // this constructor should be same as parent class constructor
    {  
        // parent class constructor by 'super' key word 
       super(firstName,lastName)
   }

}
let pet = new Pet('Billi', 'Bristol')
console.log(pet.fullName())
console.log(pet.location)