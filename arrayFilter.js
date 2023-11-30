// And when we are just filtering the elements we should use filter()
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

// example 2 - filter()

let employees = [
    {'name': 'Pooja', 'age':30, 'Gender':'Female'},
    {'name': 'Liza', 'age':20, 'Gender':'Female'},
    {'name': 'Roshan', 'age':22, 'Gender':'Male'},
    {'name': 'Roja', 'age':25, 'Gender':'Female'},
    {'name': 'PNirmal', 'age':40, 'Gender':'Male'}
]
// Filter female employees over 30 year
let femaleEmpOver25 = employees.filter((emp) => {
    return emp.Gender ==='Female' && emp.age >= 25
})
console.log(femaleEmpOver25);
