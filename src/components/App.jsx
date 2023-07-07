import React, { useState,useEffect } from "react";


function App() {

    const [count, setCount] = useState(0);
            console.log("I was Ran",count)
    useEffect((i)=>{

    },[])



    function increment() {
        setCount(count + 1);
    }

    function decrement() {  
        setCount(count - 1);
    }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>add conter</button>
      <button onClick={decrement}>Sub counter</button>
    </div>
  );
}

export default App;
