 let myDate = new Date()
 console.log(myDate)
 console.log(myDate.toString())
 console.log(myDate.toDateString())
 console.log(myDate.toLocaleString())
 console.log(typeof myDate)

//  let myCreatedDate = new Date(2024,10,11,16,38)     //JS reads month from 0 to 11; 
// let myCreatedDate = new Date("2024-11-11")       // yy mm dd
let myCreatedDate = new Date("12-11-2024")        //mm dd yy
console.log(myCreatedDate.toDateString())
 console.log(myCreatedDate.toLocaleString())

 let myTimeStamp=Date.now()   

 console.log(myTimeStamp);      //  time in miliseconds
 console.log(myCreatedDate.getTime())    //miliseconds --->use for get difference between 2 dates
 console.log(Math.floor(Date.now()/1000))   //in seconds ,with roundoff small value

 let newDate =new Date()
 console.log(newDate);
 console.log(newDate.getMonth()+1);     //JS month count from 0
 console.log(newDate.getDay());     //=> in numbers --> mon,tue,wed

 //Date is object so---
 newDate.toLocaleString('default',  {          //this method can take a object
          weekday : "long"
 })      
 console.log(newDate)         
