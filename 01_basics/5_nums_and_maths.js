const score =400
console.log(score)       //=>400  

const blance = new Number(100)
console.log(blance)     //=> 100

console.log(blance.toString().length)   // =>3
console.log(blance.toFixed(2))    //=>100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4))   //=>123.9

const hundreds = 10000000
console.log(hundreds.toLocaleString())        //=>10,000,000
console.log(hundreds.toLocaleString('en-IN'))   //=> 1,00,00,000

/********************maths************ */ 

console.log(Math)
console.log(Math.abs(-4))   //=>4
console.log(Math.round(4.6))    // 5
console.log(Math.ceil(4.2))     // 5
console.log(Math.floor(4.9))    //4
console.log(Math.min(4,5,7,1))   //1
console.log(Math.max(4,5,7,1))    //7

console.log(Math.random());    // gives random values between 0 and 1
console.log((Math.random()*10)+1)   //between 1 and 11
console.log(Math.floor(Math.random()*10)+1) // between 1 and 10--- without decimal

const min = 10;
const max =20;

console.log(Math.floor(Math.random()*(max-min+1)) +min) //=>between min and max