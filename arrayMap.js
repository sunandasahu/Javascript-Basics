
// map array - we use map to get the existing data and perform some action and save

let ageArray = [5,6,8,3];
//let mapArray= []
for(let i=0; i< ageArray.length; i++){
    if(ageArray[i]%2 == 0){

        mapArray.push(ageArray[i]* 2)
       
    }
}
 console.log(mapArray);

 // Instead of using this above for loop , We can do it with map()
 let mapArray = ageArray.map(age=>age*3);
 console.log(mapArray);
 console.log("******************");

 // Another example of map function fahrenheit to celsius

 let farTemp = [32,68,86,104,212]
 //Function to calulate celsius temp
  function convertToCelsius(far){
    return (far-32)*(5/9)
  }

  let celsiusTemp = farTemp.map(convertToCelsius)
  console.log(celsiusTemp)
  console.log("******************");

 // we can chain filter even number, multiply with 3 and add them together
 let newMapArray = ageArray.filter(num=> num %2 == 0).map(num => num*3).reduce((sum,num)=>sum+num,0);
 console.log(newMapArray);

 // splice method of array - It takes 3 parameters index it will start removing , number of elements it will remove , the value we want to add

 let animals = ['dog', 'cat', 'elephant', 'tiger']
 animals.splice(1,2,'bear', 'lion')
 console.log(animals)

 // Concate function of array - It concate/mix two arrays into one

 let fruit = ['mango', 'banana']
 let num = [1,2,3]
 let mixArray = fruit.concat(num)
 console.log(mixArray)

 // indexOf function finds the first index of an element in an array. If an element exists multiple times, we need to provide
 // another parameter index it will start looking

 let animals2 = ['dog', 'cat', 'elephant', 'tiger', 'dog']
 let firstIndexOfDog = animals2.indexOf('dog')
 console.log(firstIndexOfDog) 

 // getting index of second  occurance of an element
 let secondIndexOfDog = animals2.indexOf('dog',animals2.indexOf('dog')+1)
 console.log(secondIndexOfDog) 

 //forEach() of array to iterate through all elements and do some action 
 let num1 = [1,2,3,4,5,6]
 num1.forEach((e => {
    console.log(e *2)
 }))





