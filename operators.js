let p =1
let q = p++ // When ++ is at the end it first the original value of the variable , and next it increase the value
// console.log(p) // 1
// console.log(q) // 2

let p1 = 1
let q1 = ++p1
// console.log(p1) //2
// console.log(q1) //2

// Compairison operators

let a = 1
// console.log(a===1) // both data type and value is checked for compairison. It is called strict equality. We use 3 '===' equal sign

let x= 'abc'
let X='ABC'
// console.log(x===X) // False

//In loose equality, it only checks the value not the data type. We only use '==' two = in loose equality.
// console.log('1'== 1) // True

// ternary operator

let points = 90
let type = points > 100 ? 'gold': 'silver'
// iof points is more than 100 , it will assighn the value of type equal to gold. Or else silver
// console.log(type)

// Logical Operator AND '&&' . When both left side and right side conditions are true it will execute 
let highIncome = true
let goodCreditScore = false
let eligibleForLoan = highIncome && goodCreditScore
// console.log(eligibleForLoan) // false because not both condition are true

// OR operator '||'. It will execute if either of the conditions are true
eligibleForLoan = highIncome || goodCreditScore
// console.log(eligibleForLoan) // true because one condition is true

// NOT operator '!'
let isActive = true
// console.log(!isActive)  // false

// Falsy value - false, undefiened , null, ' ' , 0, NaN 
// truthy values are values that are not falsy

let userColor = 'Red'
let defaultColor = 'Blue'
let currentColor = userColor || defaultColor
// console.log(currentColor) // because userColor is defiened as 'Red', it will not check the right side condition. 
// And it will return 'Red'. But if the first condition is any falsy value, then it will check the right side condition. And it will return 'Blue'

// Swap values
let j = 10
let k = 20
console.log(j) //10
console.log(k) //20
let l = j
     j = k
     k = l
console.log('j ->' +j) // 20
console.log('k ->' +k) // 10







