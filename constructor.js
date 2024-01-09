// We can use constructor to create an object without any class

function car(model, build, milage){
this.model = model,
this.build =build,
this.milage = milage
}
 // create object 
 const c1 = new car('Toyota', 2016, 'rav4')
 console.log(c1)