//Immediately Invoked Function Experession(IIFE)  --> used to invoked immediatly
//                                         and keep away from globel pollution

//syntax-->
(function chai(){
    //its a NAMEED IIFE --> bcoz its name is chai
    console.log(`DB CONNECTED`)})();
                 //IIFE must stoped by ";" otherwise we got error

((name)=>{
    //its a simple IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})("Rajveer");               

