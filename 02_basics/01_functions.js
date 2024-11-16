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