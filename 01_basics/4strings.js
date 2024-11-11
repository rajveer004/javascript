const name ="Jhon"
const repocount = 10;
// console.log(name + repocount + "value")   ---->  not good not good

console.log(`Hello my name is ${name} and my repo count is ${repocount} `)

let gameName = new String('Jhon-the-boxer')
// console.log(gameName[0])
// console.log(gameName.__proto__)    //=> allmethods or function of string

//gameName=gameName.anchor('Jhon')
//console.log(gameName)            // put in anchor tag

console.log(gameName.length)
console.log(gameName.toUpperCase())       //all chars are capital but no change in original string

console.log(gameName.charAt(2))          //=>o
console.log(gameName.indexOf('o'))        //=>2

const newString = gameName.substring(0,4)
console.log(newString)        //  => Jhon 

const anotherString =gameName.slice(-12,4)
console.log(anotherString)    //=>on