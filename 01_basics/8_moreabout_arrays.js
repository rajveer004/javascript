const marval_heros =["thor","Ironman","Spiderman"]
const dc_heros  = ["Superman","flash","batman"]

// marval_heros.push(dc_heros)       //array in array
// console.log(marval_heros)     //[ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'batman' ] ]
// console.log(marval_heros[3])     //[ 'Superman', 'flash', 'batman' ]

//concate and spread methods

const allHeros =marval_heros.concat(dc_heros)
// console.log(allHeros)     //['thor','Ironman','Spiderman','Superman, 'flash', 'batman' ]

const all_New_Heros =[...marval_heros,...dc_heros]     //spread method --add more than 2 arrays
// console.log(all_New_Heros)     //['thor','Ironman','Spiderman','Superman', 'flash', 'batman' ]

const anotherArr =[1,2,3,[4,5],6,[7,8,[9,10]]]
const usable_anotherArr =anotherArr.flat(Infinity)
// console.log(anotherArr)
// console.log(usable_anotherArr)   //[ 1, 2, 3, 4, 5,6, 7, 8, 9, 10]

//quation able method

// console.log(Array.isArray([]))      //true
// console.log(Array.isArray({}))      //false
// console.log(Array.isArray(null))    //false
// console.log(Array.isArray(undefined))  //false
// console.log(Array.isArray())           //false

// console.log(Array.from("Hitesh")) //[ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name : "hitesh" ,age :20}))   //=>[]  --needs to spacify array of keys or value of object

let score1 =100
let score2 =200
let score3 =300
 console.log(Array.of(score1,score2,score3))    //[ 100, 200, 300 ]
