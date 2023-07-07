import React, { useState,useEffect } from "react";


function App() {

    const[todos,setTodos]=useState([]);


  return (
    <div>
     <h1>To DO App</h1>
     <input type="text" placeholder="Enter your task" />

     <ul>
            {todos.map(todo=>{
                return <li>{todo}</li>
            })}

     </ul>

    </div>
  );
}

export default App;
