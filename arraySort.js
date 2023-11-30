// We can sort an string array by just using sort(). It will arrange the elments by alphabetical order

let fruits = ["Mango", "Strawberry", "Apple", "Orange", "Banana"]
console.log(fruits.sort())
// We can reverse the array by reverse()

console.log(fruits.reverse())

// Sorting for number array is not same as string array. It need customized sort()

let scores = [67,0o0,12,52,98,37,10,30]
console.log(scores.sort((a,b)=> a-b))
console.log(scores.sort()) // This method is working fine as well

