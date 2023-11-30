// 1 every() -> This function return true if the condotion is true for all elements in the array, else it returns false

let numbers =[1,2,3,4,5,7,76,4]

let flag = numbers.every((e)=> e<10)
    console.log(flag)

// 2 some() -> This function return true if the condotion is true for at least one element

let fl = numbers.some((e) => e % 3 === 0)
console.log(fl)

// 3 find() -> This function returns the value of first element that satisfies the condition
let firstElement = numbers.find((e) => e % 2 ===0)
console.log(firstElement)

// 4 indexOf(), and lastIndexOf() -> it will give the last index of an element if it present multiple times
let lastIndexOf4 = numbers.lastIndexOf(4)
console.log(lastIndexOf4)

// 5 reverse()
let fruits = ['jackfruit','apple',123, 'Banana','bleuberry']
let reverseFruits = fruits.reverse()
//console.log(reverseFruits)

// 6. sort() - it sort the elements in alphabetical order. If there is numeric , uppercase , it will choose first
let sortFruits = fruits.sort()
console.log(sortFruits) // [ 123, 'Banana', 'apple', 'bleuberry', 'jackfruit' ]


