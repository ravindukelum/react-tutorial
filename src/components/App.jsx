import React, { useState } from "react";

const quotes = [
  "if you are good at something, never do it for free",
  "the night is darkest just before the dawn",
  "you either die a hero or live long enough to see yourself become the villain",
  "it is not who i am underneath, but what i do that defines me",
  "you have nothing, nothing to threaten me with, nothing to do with all your strength",
  "i am not wearing hockey pads",
  "i am batman",
  "i am not affraid of man who practice 1000 kicks 1 time ,but rather 1 kick 1000 times",
];

function App() {
  const [quote, setQuotes] = useState(quotes[0]);

  function randomizeQuote() {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setQuotes(quotes[randomQuote]);
  }

  return (
    <div>
      <div>{quote}</div>
      <button onClick={randomizeQuote}>Click Me</button>
    </div>
  );
}

export default App;
