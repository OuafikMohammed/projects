document.addEventListener("keydown" , (event)=>{
    if (event.keyCode === 37 ){
        console.log("key down");
    }
    // 37 in code ASCII means left arrow
});
document.addEventListener("keyup" , function(event){
    if (event.keyCode === 40){
        console.log("key up");
    }
    // 40 in code ASCII means down arrow
});
document.addEventListener("keypress" , (event)=>{
    if (event.keyCode === 13){
        console.log("press up");
    }
    console.log(`key`)
});




