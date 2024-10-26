import React, { useState } from "react";

function Count(){
    const[count,setCount]=useState(0);
    const increment = () => setCount(count + 1); 
    const decrement = () => setCount(count - 1);
    return(
        <>  <div className="flex-1 justify-center text-center">
                <button className="text-black bg-green-600 hover:bg-green-700 animate-pulse" onClick={increment} >Increment</button>
                <button className="text-black bg-red-600 hover:bg-red-700 animate-pulse"  onClick={decrement}>Decrement</button>
            </div>
            <h3>{count}</h3>
        </>
    )
}
export default Count