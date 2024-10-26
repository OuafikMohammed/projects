import React from 'react';
let sayHi =()=>{
    let greet = console.log("Hello Bro !")
    return(
        {greet}
    )
}
function Onclick(){
    return(
        <button onClick={sayHi}>CLICK ME</button>
    )
}
export default Onclick
