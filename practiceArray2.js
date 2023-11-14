let numArray= [12,43,57,78,35,82]
//print only even number from the array and push to a new array
let evenArray = [];
for(let i=0; i< numArray.length; i++){
    if(numArray[i]%2 == 0){
        evenArray.push(numArray[i])
        //console.log(numArray[i])
    }
}
console.log(evenArray);

//We can achieve the same by using filter()
let newEvenArray = numArray.filter(num=>num %2 == 0);
console.log(newEvenArray);

// When we have a value getting updated and accumulated in every iteration we can use reduce() 
// And when we are just filtering the elements we should use filter()

// map array - we use map to get the existing data and perform some action and save

let ageArray = [5,6,8,3];
//let mapArray= []
// for(let i=0; i< ageArray.length; i++){
//     if(ageArray[i]%2 == 0){

//         mapArray.push(ageArray[i]* 2)
       
//     }
// }
//  console.log(mapArray);

 // We can do it with map()
 let mapArray = ageArray.map(age=>age*3);
 console.log(mapArray);
 console.log("******************");

 // we can chain filter even number, multiply with 3 and add them together
 let newMapArray = ageArray.filter(num=> num %2 == 0).map(num => num*3).reduce((sum,num)=>sum+num,0);
 console.log(newMapArray);
