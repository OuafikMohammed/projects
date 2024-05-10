function one (){
    console.log("One")
}
function two (){
    one()
    console.log("Two")
}
function three (){
    two()
    console.log("Three")
}
/*

 */
setTimeout(()=>{
    console.log("Web API")
},0)
console.log("###");
console.log("one");
console.log("three")