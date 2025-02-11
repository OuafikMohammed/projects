import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up an interval and clean up on unmount
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    // Clean up on component unmount
    return (() =>{ 
        clearInterval(interval)
        }
    )
  }, []); // Empty dependency array means this only runs once

  return <h1>Timer: {count} seconds</h1>;
}

export default Timer;
