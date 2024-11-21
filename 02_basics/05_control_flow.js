const balance =1000
if(balance < 500){
       console.log("less than 500")
}else if(balance>500){
        console.log("greater than 500")
}else{
    console.log("i don't know")
}

// if(true) console.log("right")         //currect syntex
// if(true) console.log("test1") ,console.log("test2") //it runs but not good practice



//+++++++++++++switch++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//truthy-------------------->

// const userEmail = "h@hridwar.com"
// const userEmail = ""                    //falsey value
const userEmail = []                //truthy value

if(userEmail){
    console.log("got user email")
}
else{
    console.log("dont get user email")
}

//falsy values ==== >>>>>>>>  false ,0 , -0, BigInt 0n, null, Undefined ,NaN
//truthy values >>>>>>>>>  true ,1 ,"0",'false' , " " , [] ,{} , function(){}

//to check array or object is empty or not
if(userEmail.length == 0){
    console.log("userEmail array is empty")
}
const myObj ={}
if(Object.keys(myObj).length == 0){
    console.log("myObj object is empty")
}


//   Nullish Coalesching Operator (??) : null undefined

// let val1= 5 ?? 10         //=>5
// let val1= null ?? 10           //=>10
// let val1= undefined ?? 10           //=>10
let val1= undefined ?? 15 ?? 10           //=>15


console.log(val1) 


//  Terniary Operator   ==>    Condition ? true :false ;

const icecreamPrice =100
icecreamPrice<=80 ? console.log("sasti hai") : console.log("mangi hai")