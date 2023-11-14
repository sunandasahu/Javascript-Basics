// Functions in JS is same as methods in Java
// Example of a very simple function to add two numbers in classical way
function add(a,b){
 return a+b
}

// we need to call that function where we can provide the arguments

let sum = add(4,6);
console.log(sum);

// We can write function in a very sort form like an anonymus function. It is a function which has no name . 

let sumOfInteger = (c,d) => c+d;
console.log(sumOfInteger(4,9))