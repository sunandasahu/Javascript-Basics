
let scores = [43,54,69,75,98,88];
console.log(scores[4]); //Getting 4th index element value from the array
scores[1]=33;
console.log(scores);//[43,33,69,75,98,88]
console.log("Length of the original array is : "+ scores.length);//6

// We can append(add multiple elements) an array at the end by push
scores.push(99);
console.log("Array after pushing new element at the end : "+scores);

// We can delete the last object we added using pop method
scores.pop() // remove 99 from array
console.log("Array after removing new element we added at the end : "+scores);

// We can add multiple elements in the beginning of an array by using unshift
scores.unshift(11); 
console.log("Array after adding new element in the beginning : "+scores);

// We can get the index of an element by using indexOf()
console.log(scores.indexOf(98));

// Check if an element exists in the array by using includes()
console.log(scores.includes(123));// if it exists, it will return true else return false
console.log(scores.includes(75));

// We can create a sub array from the parent array by using slice()
subScore= scores.slice(2,5); // 2-5 will bring 3rd, 4th and 5th elements from parent array
console.log("Sub array : "+ subScore);


