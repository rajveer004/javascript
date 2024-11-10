let score ="33abc";
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber)

//"33" =>33
//"33abc"=> NaN 
//true=> 1, false=>0;

let isLogedIn ="Hitesh"

let booleanIsLogedIn = Boolean(isLogedIn)
console.log(booleanIsLogedIn)
console.log(typeof (booleanIsLogedIn))

//1 => true , 0 => false
//" " => false
//"abc" => true

let someNumber = 33

let stringNumber =String(someNumber)
console.log(stringNumber)
console.log(typeof (stringNumber))

//33 => "33"


//************       operations    *************/

let value =3
let negValue = -value
console.log(negValue)  //==> -3

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3) //  ==> 2to the power 3
console.log(2%3)  // remander

let str1 = "hello"
let str2 = " Jhon"
let str3 = str1 + str2
console.log(str3)  //=> hello Jhon

console.log(1 + "2")     // =>12
console.log("1" +2)      // =>12
console.log("1" + 2 + 2) // =>122
console.log(1 + 2 +"2")  // =>32     according to first data type


console.log(+true)  // => 1
// console.log(true+)  //=> error
console.log(+false) //=> 0
console.log(+"") // =>0

let gameCounter = 100;
gameCounter++  // or ++gameCounter 
console.log(gameCounter)  //=>101