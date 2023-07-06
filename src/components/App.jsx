import React,{useState} from "react";
import Custom from "./Custom";

console.log("HEllo world");

function App() {

    const [counter, setCounter] = useState(0);

  function addcounter() {
    setCounter(counter + 1);
  }

  function subcounter() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={addcounter}>Increase counter</button>
      <button onClick={subcounter}>Decrease counter</button>

      <Custom name="Ravindu" />
    </div>
  );
}

export default App;
