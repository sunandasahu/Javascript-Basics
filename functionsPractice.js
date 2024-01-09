// Functions in JS is same as methods in Java
// Example of a very simple function to add two numbers in classical way
function add(a,b){
 return a+b
}

// we need to call that function where we can provide the arguments

let sum = add(4,6);
console.log(sum);

// We can write function in a very sort form like an anonymus function. It is a function which has no name . 
// This is called arrow function
let sumOfInteger = (c,d) => c+d;
console.log(sumOfInteger(4,9))

//exa 2 annonimus function

let product = function(x,y){
    return x*y
}
let productValue = product(5,6)
console.log (productValue)

// Recursive function - is a function that call itself.

// fectorial of an number
function factorial(n){
    if (n === 0 || n===1){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
console.log("factorial of 4 is =  " +factorial(4)) // 4*3*2*1=24