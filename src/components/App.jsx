import React, { useState } from "react";
import Custom from "./Custom";

console.log("HEllo world");

// setCounter = function (value) {   //this is the function that is called when we call setCounter
//   if (typeof value === "function") {
//     // I want to something else
//     const updatedValue = value(oldValue);
//     counter = updatedValue;
//     rerender();
//   } else {
//     counter = value;
//     rerender();
//   }
// }

function App() {
  const [counter, setCounter] = useState(0); //start with use call hooks

  function addcounter() {
    setCounter(oldCounterValue=>oldCounterValue+1);
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
