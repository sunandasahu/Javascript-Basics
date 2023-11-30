
// For loop
for(let i=0; i<=5; i++){
    //console.log("Hello world !")
}

// Const variable

const flag = true;
// We can not change the value of a constant. But we can change the expression of the constant by providing "!".
//Here the vale of flag is still true
if(!flag){
    //console.log("Condition satisfied !")
}
else{
   // console.log("Condition not satisfied !")
}

// While loop
let i=0;
while(i<5){
    //console.log("I am inside a while loop");
    i++
}

// Do while loop execute the statement at least one time before checking the condition

do{
i++
}while (i<10);{
    //console.log("I am inside a do-while loop");
};

//console.log("*******************************************");

// find multiples of two number(2, 5) using for loop , use '&&' operator to satisfy both condition
for (let k=1; k<=10; k++){
    if(k%2 == 0 && k%5 == 0){
    //console.log("Common multiples of 2 and 5 : "+ k);
    }
}
// console.log("*******************************************");
//  to find multiple of either number use '||' operator.
for (let k=1; k<=10; k++){
    if(k%2 == 0 || k%5 == 0){
    //console.log("multiples of 2 or 5 : "+k);
    }
}
//console.log("*******************************************");
// To only get first 3 multiples we can use another if condition 
let n =0;
for (let k=1; k<=100; k++){
    if(k%2 == 0 && k%5 == 0){
        n++
       // console.log("First 3 Common multiples of 2 and 5 : "+ k);
    if (n == 3){
        break;
    }
    }
}

// If else statement

let time =  20
if(time>=6 && time <=12)
    console.log('Good Morning!')
else if (time>12 && time <= 18)
    console.log('Good Afternoon!')
else
    console.log('Good Evening!')

// Find the biggest number
let a = 400
let b = 500
let c = 300
if (a>b && a>c)
console.log('a is the largest number')
else if (b>c)console.log('b is the largest number')
else console.log('c is the largest number')