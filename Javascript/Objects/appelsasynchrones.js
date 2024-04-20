document.getElementById("btn-google").addEventListener("click",function(){
    open("https://www.google.com/")
})
// setInterval infinite time

// let i = 0
// setInterval(function(){
//     i++
//     console.log(i)
// },2000)
// setTimeOut ### executed 1time ###

// setTimeout(function(){
//     console.log("ok 5 seconds")
// },5000)

// appel synchrone

// let a = 10;

// let b = 19;

// let somme = a + b
// console.log(somme)

// appel asynchrone

// callback

// // recuperer les donees
// let Stagiaires = getData(function(listStagiaires){
//     console.log(listStagiaires)
// });

// // traiter les donnees
// function getData(myCallBackFunction) {
//     return myCallBackFunction(["ELKADIRI" , "FEYD" , "ELBATOULI"])
// };


// CallBack
// let stagiaires = getData(function(listStagiaires){
//     console.log(listStagiaires)
// });
// function getData(myCallBackFunction){
//     setTimeout(function(){
//         return myCallBackFunction(["ELKADIRI" , "FEYD" , "ELBATOULI"])
//     },200)
// }
// Promise



























let stocks = {
    Fruits : ["strawberry" , "grapes" , "banana" , "apple"],
    liquid: ["water" ,"ice"],
    holder: ["cone" , "cup" ,"stick"],
    toppings: ["chocolate","peanuts"]
};
//CALLBACK FUNCTION

// let order = (Fruit_name, call_production) => {
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//     },2000);

//     call_production();
// };

// let production = () =>{
//     setTimeout(()=>{
//         console.log("production has started");
//     setTimeout(()=>{
//         console.log("the fruit has been chopped !");
//     setTimeout(()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//     setTimeout(()=>{
//         console.log("The machine was started .")
//     setTimeout(()=>{
//         console.log(stocks.holder[0])
//     setTimeout(()=>{
//         console.log(stocks.toppings[1])
//     })
//     setTimeout(()=>{
//         console.log(stocks.toppings[0])
//     setTimeout(()=>{
//         console.log("serve icecream")
//     },2000)
//     },3000)
//     },2000)
//     },1000)    
//     },1000)
//     },2000)
//     },1000)
// }

// order(0 , production);

//PROMISES

// let is_shop_open = false;



// let order = (time , work) => {

//     return new Promise((resolve , reject)=>{

//         if (is_shop_open){
//             setTimeout(()=>{
//                 resolve(work());
//             },time);
            
//         }else{
//             reject(console.log("Our stocks are finshed!"))
//         }
//     });

// };

// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected `))
// .then(()=>{

//     return order(1000,()=>console.log("Production has started !"))
// })
// .then(()=>{
//     return order(2000, ()=>console.log("The fruit was chopped !"))
// })
// .then(()=>{
//     return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected `))
// })
// .then(()=>{
//     return order(2000,()=>{
//         console.log(`ice cream was placed on ${stocks.holder[0]}`)
//     })
// })
// .then(()=>{
//     return order(3000, ()=>{
//         console.log(`${stocks.toppings[0]} was selected`)
//     })
// })
// .then(()=>{
//     return order(1000, ()=>{
//         console.log("ice cream was served !")
//     })
// })
// .catch(()=>{
//     console.log("Customer left")
// })
// .finally(()=>{
//     console.log("Day is ended .Shop is closed!")
// })