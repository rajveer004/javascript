let a =10;
const b =20;
var c =30;

if(true){
    let a=100;               //block scope
    const b=200;             //block scope
    var c=300;                 //globel scope --->var should not use
    console.log("inner",a)            
    console.log("inner",b)           
    console.log("inner",c)    //300
}

console.log("outer:",a)
console.log("outer:",b)
console.log("outer:",c)     //300

//nested scope or clouser--> inner function can use outer function variables but outer can't
function outer(){
    const userName ="Rajveer"

    function inner(){
        const website ="google"
        console.log(userName)
    }
    // console.log(website);   //--> can't access website out of block scope of inner fn

    inner()
}
outer()


if(true){
    const userName ="rajveer"
    if(userName === "rajveer"){
        const website ="google"
        console.log(userName +" in "+ website)  //here userName can assess
    }
    // console.log(website)               //cant access
}
// console.log(userName)             //cant access


// ++++++++++++ about hosting(can call function before declaration) +++++++++++++
console.log(addOne(5))    // annonymus function allow hosting
function addOne(num){
    return num+1
}
// console.log(addOne(5))     //its normal

// console.log(addTwo(5))              //expersion  can't allow hosting
const addTwo =function(num){
    return num+2
}
console.log(addTwo(5))          //its normal
