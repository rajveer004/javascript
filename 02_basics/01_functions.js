function sayMyName (){
    console.log("R");
    console.log("a");
    console.log("j")
    console.log("v")
    console.log("e")
    console.log("e")
    console.log("r")
}

// sayMyName()

// function addTwoNumbers(number1 ,number2){
//     console.log(number1 + number2)
// }
// addTwoNumbers(2,3)
 
function addTwoNumbers(number1 ,number2){
//    let result =number1+number2
//    return result
    return number1 +number2
}
// console.log(addTwoNumbers(2,3))

const result =addTwoNumbers(3,5)
console.log("result :",result)

function loginUserMessage(username){        //(username = "sam")
    if(username === undefined){     // if(!username)
        console.log("Please enter your username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("Rajeevr"))


//how function gets unlimited arguments
function calculateCartPrice(...num1){   // rest operator -->...
        return num1
}
console.log(calculateCartPrice(200,400,500,1000))   //[ 200, 400, 500, 1000 ]

// function calculateCartPrice2(val1, val2, ...num2){   
//     return num2
// }
// console.log(calculateCartPrice(200,400,500,1000))  // [500,1000]


//how function use arguments as object and arrays

const user = {
    username : "hitesh",
    price :119
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username : "Rajeevr",
    price : 1000
})

const myNewArray =[2,3,4,55,66]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))   //3
console.log(returnSecondValue([1,2,3,4]))      //2
