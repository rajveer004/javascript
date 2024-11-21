const  user = {
        userName : "hitesh",
        price : 999,

        welcomeMessage : function(){
            console.log(`${this.userName} ,welcome to website`)   //this-->refere current context
            console.log(this)      //show all current context of this object user
        }
}
user.welcomeMessage()
user.userName = "sam"
user.welcomeMessage()

console.log(this)          // it gives--> {}  , in node environment ,but in broswer, it gives window and different events that are usable

// function chai(){
//     let userName = "hitesh"
//     console.log(this.userName);      //this cant work in function , only work in object
// }
// chai()      //->it gives undefined

// const chai = function (){
//         let userName = "hitesh"
//         console.log(this.userName); 
// }
// chai()      //->it gives undefined

const chai = () =>{                    //arrow function
    let userName = "hitesh"
    console.log(this.userName); 
}
chai()    //undefined

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1,num2) => num1+num2            //implicit return function -->no need of return and curly bresals
// const addTwo = (num1,num2) =>( num1+num2 )               // all are currect syntax of arrow fn
const addTwo = (num1,num2) =>( {username: "rajveer"} )
console.log(addTwo(3,4))


