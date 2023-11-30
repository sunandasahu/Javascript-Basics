// When we have a value getting updated and accumulated in every iteration we can use reduce() 
// From an Array , we are reducing the return value to one element

// reduce function takes two parameter in the callback function 

let numb = [1,2,3,4,5,6]
let sumOfAllElements = numb.reduce((accumulatedValue,number) => accumulatedValue+number, 0)
console.log(sumOfAllElements)

// For loop for the above function. We can achieve same thing
let scores = [65,98,74,83]
let sumOfElements = 0;
 for(let i=0; i<scores.length; i++){
    console.log("element "+ i +":  " +scores[i])
    sumOfElements = sumOfElements+ scores[i]
 }
 console.log("Sum of all elements in the array is : "+ sumOfElements);

 // exa 2 - find highest number by reduce function

 let number = [25,65,98,71,45,31]
 let heighestNumber = number.reduce((heighestNum, num) => {
    
    if(num> heighestNum){
        return num
    }else return heighestNum

},number[0] )
 console.log('Heighest number in the array is : ' + heighestNumber)

 // exa-3 calculate total bill on the cart

 let cart = [
    {'name': 'toys', 'price': 49},
    {'name': 'dress', 'price': 25},
    {'name': 'pant', 'price': 20}
 ]
 let totalPrice = cart.reduce((total,item) => total+item.price, 0)
 console.log('Total price on the cart : '+ totalPrice)
