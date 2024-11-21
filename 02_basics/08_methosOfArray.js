const coding = ["js","c++","python","ruby"]

const values = coding.forEach((item)=>{
    // console.log(item);
    return item
    
})
// console.log(values);


//filter----------->

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=> num >3)
const newNums = myNums.filter((num)=> {return num >3})
// console.log(newNums)

const newNms =[]
myNums.forEach((num)=>{
    if(num>4) newNms.push(num)
})
// console.log(newNms);

//map------------------------>>>>>>>>>>

const Numbers= [1,2,3,4,5,6,7,8,9,10]

const newNumbers = Numbers.map((num)=> {return num*10})
// console.log(newNumbers)

//chaining--->
const newNum = Numbers
                     .map((num)=>num +2 )
                      .map((num)=> num*10)
                      .filter((num) => num>60)
 
// console.log(newNum);
                      

//   reduce ----------->>

const numArr =[1,2,3,]

// const total = numArr.reduce(function(previousValue , number){
//     console.log(`previousValue is ${previousValue} and number is ${number}`)
//     return previousValue+number
// },0)

const total =numArr.reduce((acc ,curr)=>acc+curr ,0)
console.log(total);


const shopingCart = [
    {
        cource : "js",
        prise : 1000
    },
    {
        cource : "py",
        prise : 100
    },
    {
        cource : "dsa",
        prise : 1100
    },
]

const totalPriseToPay = shopingCart.reduce((acc ,currItem)=> acc+currItem.prise,0)
console.log(totalPriseToPay);




                 
