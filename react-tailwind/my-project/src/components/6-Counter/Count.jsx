import React from 'react';
let count = 0
function setCount(){
    count +=  1
    console.log(count)
}
function Count(){
    let count = 0;
    count +=  1;
    return(
        <button onClick={setCount}>Count</button>
    )
}
    
export default Count