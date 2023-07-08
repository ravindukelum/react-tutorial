import React, { useState, useEffect } from "react";

let globalId = 0;

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(event) {
    event.preventDefault(); //prevent page refresh
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalId++ }]; //add new task in todos array
    });
  }

  //enter button work top createTodo //one of way
  //another way  is add form tag and add onSubmit={createTodo} in form tag
  // function tryToCheckforEnterKey(event){
  //   if(event.key==="Enter"){
  //     createTodo()
  //   }
  // }

  function deleteItem(itemId) {
    setTodos(oldTodos => oldTodos.filter(item=>item.id !== itemId))
  }

  return (
    <div>
      <h1>To DO App</h1>
      <form onSubmit={createTodo}>
        {" "}
        {/* another way to create todo */}
        <input
          //onKeyDown={tryToCheckforEnterKey}
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button type="submit">Create ToDo</button>
      </form>

      <ul>
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>{item.todo} {item.id}</li>
              <button onClick={()=>deleteItem(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
