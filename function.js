function saySomething() {
    console.log("I am learning Javascript")
    console.log("Mazumdar Atik")
    console.log("Samiul haques")
}

saySomething();
console.log("Atik")

function parameter(para1, para2){
    console.log(`Hello ${para1}! Are u ${para2}?`)
}
let val="Mazumdar Atik"
let val2 ="virgin"
parameter(val,val2);

//Normal Function
function car(Brand, Brand2){
    console.log(`The car is ${Brand} another one is ${Brand2}`)
}
let val3 = "BMW";
let val4 ="Masherati"
car (val3, val4);

//Function Expression 
let cars = function(p1, p2){
   console.log( `Parts 1  is: ${p1}  
Parts 2 is: ${p2}`);
}
var val5 = 'Engine';
var val6 = 'Body';
cars(val5, val6);

//Arrow Function
let bike = (b1, b2) => {
    console.log('Bikes are ' + b1 + b2);
}
bike("Pulsar and ", "Suzuki");

//foreach array iteration
var fruits = ['Apple','orange','Banana','Mango'];
let printfruits = function(item,index,xyz){
    console.log(`Index: ${index} Items: ${item}`);
    console.log(xyz);
}

fruits.forEach(printfruits);