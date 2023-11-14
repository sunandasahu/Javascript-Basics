// difference between var and let. These are both use to initialize variables . 
// We can use 'var' keyword scope is either in global level or function level

// But 'let' keyword has scope either global level or at block level
// Both var and let can be re-initialize but var can not be re-declare.
// But 'const' key waord can not re-initialized

var num1= 5;
var num2= 9;
var greet = "Morning";

if(1==1){
     greet ="Evening"
}

function factor (){
     var greet = "Afternoon";
     console.log(greet);
     return num1*num2
}
console.log(greet);

// If we change the 'var' to 'let' the scpe of greet will change

let day = "Monday"

function test(){
    let day = "Tuesday"
}

if(1==1){
     day = "Wednesday"
}

console.log(day) // We are not able to access the day value inside {block}
const name = "sunanda"
//name = "Arushi" // we can not re-initialize const
//console.log(name) // it will through error
