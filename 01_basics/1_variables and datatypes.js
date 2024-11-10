const accountId = 101   // never reasign value; accountId = 201--->not allowed
let accountName ="James Bond"
var accountMail = "James101@gmail.com"
accountCity = "Jaipur";       // not a good practice
let accountState ;    //  its output --> undefined  ,,,becouse value is not defined
let accountPrivacy = null   // output --> null ,,, becouse no value is given to this variable

// accountId = 201  
accountName="bondsss"
accountMail = "hjkk@gmail.com"
accountCity="Pune"
console.table([accountId,accountMail,accountName,accountCity,accountState,accountPrivacy]);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

//------------------------------------Data types -----------------------

"Use Strict";  //treat all JS code as  newer version
// alert(3+3)       -->use in browser 

let name = "James Bond"
let age = 30
let isLogedIn = false

//Number => 2 to power of 53
//bigint
//string ""
//boolean =>true/false
//null =>standalone value
//undefined => variable is declared but not assigned any value
//symbol=> to define uniqueness
//object => collection of key value pairs

console.table([typeof name,age,isLogedIn])

console.log(typeof undefined)   // always undefined
console.log(typeof null)         // output--> object