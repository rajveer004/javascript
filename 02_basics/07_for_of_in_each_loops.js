//for of loop --------------->>>>>>>>>>
// for (const element of object) {
    
// }

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`greets are ${greet} ` )
}


//maps       -->unique pair of key and value , also prefer order of keys

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United Sates Of America")
map.set('Fr' , "France")
map.set('IN',"India")

// console.log(map)
for (const [key,value] of map) {
    // console.log(key, ":->", value);
}


const myObj ={
    "game1" : "NFS",
    "game2" :  "Spiderman"
}
// for (const key of myObj) {
    // console.log(key)                    //=>object is not iterable
// }

// ------------------------------------------------------------------

//for in loop ------------>

const myObject ={
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
}
for (const key in myObject) {
//   console.log(key);
//   console.log(myObject[key]);
// console.log(`${key} sortcut for ${myObject[key]}`);

}


const myArr = ["js" ,"rb" ,"py","java","cpp"]
for (const key in myArr) {
//   console.log(key);
//   console.log(myArr[key])
}

for (const key in map) {
//    console.log(key)              //for of not work in map,   for in works
}


//-----------------------------------------------------------

//For each --------->

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function(val){
//     console.log(val)
// })

// coding.forEach((item)=>{
//     console.log(item);  
// })

// function printMe(item){
//     console.log(item);   
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);   
// })

// --------------

const myCoding =[
    {'languageName': "javaScript",
        'languageFileName ': "js"
    },
    {'languageName': "c++",
        'languageFileName ': "cpp"
    },
    {'languageName': "java",
        'languageFileName ': "java"
    }
]
myCoding.forEach((item)=>{
     console.log(item.languageName);
     
})

    