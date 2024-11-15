const myArr =[0,1,2,3,4,5]
// console.log(myArr)
// console.log(typeof myArr)     //=>object

const myArr2= new Array(1,2,3,4,5)
// console.log(myArr2)

//   ARRAY METHODS---->

// myArr.push(7)
// console.log(myArr)    //[0,1,2,3,4,5,7]

// myArr.pop()
// console.log(myArr)     //[0,1,2,3,4,5]

// myArr.unshift(9)
// console.log(myArr)     //[9,0,1,2,3,4,5]
// myArr.shift()
// console.log(myArr)     //[0,1,2,3,4,5]

// console.log(myArr.includes(9))    //false
// console.log(myArr.indexOf(9))       //-1  becose 9 is not persent in array
// console.log(myArr.lastIndexOf(4))   //4

// const newArr =myArr.join()
// console.log(newArr)
// console.log(typeof newArr)          //string

//slice and splice   slice-> gives a copy of array(ind 1 include.indx 2 exclude),didn't effect original array 
//splice-> gives a modified array, effect original array(indx 1 include,indx 2 include)

const nA1 = myArr.slice(1,3)
console.log(nA1)               //[1,2]
console.log(myArr)             //[0,1,2,3,4,5]

const nA2 = myArr.splice(1,3)
console.log(nA2)                   //[1,2,3]
console.log(myArr)               //[0,4,5]