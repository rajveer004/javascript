//singleton  objects--->by constrector
//object.create

//object literals

const mySymbol =Symbol("key1")     // its declaration of symbol

const JsUser = {
    name : "Rajveer",
    "full name" : "Rajveer SIngh",    //this cant acces by (object.key)
    [mySymbol] :"mykey1",        //use of symbol in object
    age : 21,
    email : "rajveer@google.com",
    location: "Jaipur",

}
console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["full name"])
console.log(JsUser[mySymbol])           //symbol is only acces by this method only

JsUser.email = "rajveer@microsoft.com"    //for overriding the key values
// Object.freeze(JsUser)          //to ristrict changes in object

JsUser.greeting = function(){            //adding function in object
    console.log("Hello JS user");
}

JsUser.greetingTwo =function(){
    console.log(`Hello JS user ${this["full name"]}`)
    console.log(`Hey ${this.name} `)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

console.log(JsUser)