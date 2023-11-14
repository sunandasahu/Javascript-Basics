// String is an array of cherecters
// String functions are very similar to arrays function
let day = "tuesday "
console.log(day.length) // number of character in the string 
console.log(day[2])  //Charecter at the index
let subday = day.slice(1,4)
console.log(subday)
let subString = day.split('s')
console.log(subString.length)
console.log(subString[0])// tue  subString[1] = day . but we have extra space
// We cab use trim method to remove any white spaces in the string
console.log(subString[1].length)
let trimSubString = subString[1].trim()
console.log(trimSubString)
console.log(trimSubString.length)

// We can convert string to number by using parseInt()

let date1 = '21'
let date2 = '28'
let difference = parseInt(date2) - parseInt(date1)
console.log(difference)

// Same we can convert number to string by using toString()
let gap = difference.toString()
console.log(typeof(gap))



