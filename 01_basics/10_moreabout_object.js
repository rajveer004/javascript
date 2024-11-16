// const tinderUser =new Object()     // singleton object

const tinderUser = {}         //not  a singleton obj

tinderUser.id ="123"
tinderUser.name = "John"
tinderUser.age = 25
tinderUser.IsLogedIn = false

// console.log(tinderUser);

const regularUser ={
    email :"some@gmail.com",
    fullName : {
        userFullName:{
            firstName: "Rajveer",
            lastName :"Mahala"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullName.userFullName.lastName)   //can access any value from inner object

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// const obj4 ={obj1,obj2}  
// console.log(obj4)     //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4 = Object.assign(obj1,obj2)      //its join to objects and return a new object
// console.log(obj4)        //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4)        

const obj4 = {...obj1,...obj2}    //spread operator --->to join objects more than 2 also
console.log(obj4)

const User =[
    {
        id:1,
        name : "Rajveer",
    },
    {
        id:2,
        name : "Aadesh",
    },
    {
        id:3,
        name : "Hitesh",
    },
]
console.log(User[2].name)

console.log(tinderUser)
console.log(Object.keys(tinderUser))       //[ 'id', 'name', 'age', 'IsLogedIn' ]
console.log(Object.values(tinderUser))       //[ '123', 'John', 25, false ]
console.log(Object.entries(tinderUser))   //[[ 'id', '123' ],[ 'name', 'John' ],[ 'age', 25 ],[ 'IsLogedIn', false ]]

console.log(tinderUser.hasOwnProperty('IsLogedIn'))   //true

const course ={ 
    coursename:"Java Script",
    courseDuration:"6 months",
}
// console.log(course.courseDuration)
const {courseDuration : duration} = course;        //destructuring of object
// console.log(courseDuration)
console.log(duration)


//about API's -->json-JavaScriptObjectNotation file
// {
    // "name" : "jhon",
    // "study" : "JS",
    // "age"   :20
// }

[
    {},
    {},
    {},
]