import React, { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(["Buy milk", "Buy eggs"]);

  function createTodo() {
    console.log(`Task value:${task}`);

    setTodos(oldTodos=>{
      return[...oldTodos,task]
    })
  }
  return (
    <div>
      <h1>To DO App</h1>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(event) => {
          setTask(event.target.value);
        }}
      />
      <button onClick={createTodo}>Create ToDo</button>

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
