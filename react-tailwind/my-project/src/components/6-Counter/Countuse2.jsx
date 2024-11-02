import React , {useState ,useEffect} from 'react';
function Counter (){
    const[count ,setCount] = useState(null);
    // Falsy values
    // 0 , "" , undefined , null
    // Thruthy values 
    // ALL values except the falsy values
    // if count is a true or count is false

    useEffect(()=>{
        if (!count) {
            console.log(`Count is ${count}`);
        } else{
            console.log(`Count is ${count} : 0 or undefined`);
        }
    },[])// runs once
    return(
        <div>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}
export default Counter ;